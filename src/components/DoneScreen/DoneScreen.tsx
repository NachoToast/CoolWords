import { Stack, Typography, Button, Box, Fade } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allWords from '../../data';
import ColourGradient, { std_green, std_red, std_yellow } from '../../helpers/colorGradient';
import {
    getQuestionNumber,
    getCurrentScore,
    getBestScore,
    setBestScore,
    setInGame,
    setQuestionNumber,
    clearCurrentScore,
} from '../../redux/slices/main';

const DoneScreen = () => {
    const dispatch = useDispatch();
    const questionNumber = useSelector(getQuestionNumber);
    const currentScore = useSelector(getCurrentScore);

    const currentBestScore = useSelector(getBestScore);

    const percentRight = useMemo<number>(
        () => Math.floor((100 * currentScore) / questionNumber),
        [currentScore, questionNumber],
    );

    const [oldPercentRight] = useState<number>(
        (() => {
            if (currentBestScore) {
                return Math.floor((100 * currentBestScore.got) / currentBestScore.outOf);
            }
            return 0;
        })(),
    );

    const [isNewBest, setIsNewBest] = useState<boolean>(false);

    useEffect(() => {
        if (currentBestScore) {
            if (percentRight > oldPercentRight) {
                setIsNewBest(true);
            }
        } else if (currentScore > 0) {
            setIsNewBest(true);
        }
    }, [currentBestScore, currentScore, oldPercentRight, percentRight]);

    useEffect(() => {
        if (isNewBest) {
            dispatch(
                setBestScore({
                    got: currentScore,
                    outOf: allWords.length,
                    at: Date.now(),
                }),
            );
        }
    }, [currentScore, dispatch, isNewBest]);

    const percentColor = useMemo<string>(() => {
        const { red, green, blue } = ColourGradient(0, 100, percentRight, std_red, std_yellow, std_green);

        return `rgb(${red}, ${green}, ${blue})`;
    }, [percentRight]);

    const handleLeave = useCallback(() => {
        dispatch(setQuestionNumber(0));
        dispatch(clearCurrentScore());
        dispatch(setInGame(false));
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
                {currentScore} / {questionNumber}
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
                        <Typography textAlign="center">
                            You bet your previous best score by{' '}
                            <span style={{ color: 'pink', cursor: 'pointer' }} title="(percentage points)">
                                {percentRight - oldPercentRight}%
                            </span>
                        </Typography>
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
