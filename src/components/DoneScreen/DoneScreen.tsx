import { Stack, Typography, Button, Box, Fade } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColourGradient, { std_green, std_red, std_yellow } from '../../helpers/colorGradient';
import ScoreHelpers from '../../helpers/ScoreHelpers';
import {
    getCurrentScore,
    getQuestionPool,
    finishGame,
    getGameMode,
    getGameHistory,
    setGameHistory,
} from '../../redux/slices/main';
import { BestScore, GameHistory } from '../../types/GameHistory';

const DoneScreen = () => {
    const dispatch = useDispatch();
    const currentScore = useSelector(getCurrentScore);
    const questionPool = useSelector(getQuestionPool);
    const gameMode = useSelector(getGameMode);
    const gameHistory = useSelector(getGameHistory);

    const [oldHistory] = useState<GameHistory>(gameHistory);

    const percentRight = useMemo<number>(
        () => Math.floor((100 * currentScore) / questionPool.length),
        [currentScore, questionPool.length],
    );

    const currentBestScore = useMemo<BestScore | undefined>(() => {
        if (gameMode !== null) {
            return ScoreHelpers.getScore(oldHistory, gameMode?.saveLocation);
        }
        return undefined;
    }, [gameMode, oldHistory]);

    const oldPercentRight = useMemo<number | undefined>(() => {
        if (currentBestScore) {
            return Math.floor((100 * currentBestScore.got) / currentBestScore.outOf);
        }
        return undefined;
    }, [currentBestScore]);

    const isNewBest = useMemo<boolean>(() => {
        if (currentBestScore) {
            if (!oldPercentRight || percentRight > oldPercentRight) {
                return true;
            }
            return false;
        } else if (currentScore > 0) {
            return true;
        }
        return false;
    }, [currentBestScore, currentScore, oldPercentRight, percentRight]);

    useEffect(() => {
        if (gameMode === null) return;
        if (!isNewBest) return;

        console.log('new best!');
        const newHistory = ScoreHelpers.saveScore(
            JSON.parse(JSON.stringify(oldHistory)),
            {
                got: currentScore,
                outOf: questionPool.length,
                at: Date.now(),
            },
            gameMode.saveLocation,
        );

        dispatch(setGameHistory(newHistory));
    }, [currentScore, dispatch, gameMode, isNewBest, oldHistory, questionPool.length]);

    const percentColor = useMemo<string>(() => {
        const { red, green, blue } = ColourGradient(0, 100, percentRight, std_red, std_yellow, std_green);

        return `rgb(${red}, ${green}, ${blue})`;
    }, [percentRight]);

    const handleLeave = useCallback(() => {
        dispatch(finishGame());
    }, [dispatch]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleLeave();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleLeave]);

    return (
        <Stack alignItems="center" spacing={3} sx={{ mt: 1 }}>
            <Typography variant="h3" textAlign="center">
                {currentScore} / {questionPool.length}
            </Typography>
            <Typography>
                You knew <span style={{ color: percentColor }}>{percentRight}%</span> of the words.
            </Typography>
            {isNewBest && (
                <Fade in>
                    <Box>
                        <Typography color="lightgreen" textAlign="center">
                            New Best!
                        </Typography>
                        {oldPercentRight !== undefined && (
                            <Typography textAlign="center">
                                You bet your previous top score by{' '}
                                <span style={{ color: 'pink', cursor: 'pointer' }} title="(percentage points)">
                                    {percentRight - oldPercentRight}%
                                </span>
                            </Typography>
                        )}
                    </Box>
                </Fade>
            )}
            <Button variant="outlined" size="large" onClick={handleLeave}>
                Home
            </Button>
        </Stack>
    );
};

export default DoneScreen;
