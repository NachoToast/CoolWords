import { Button, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wordShuffle from '../../helpers/wordShuffle';
import { getBestScore, setInGame } from '../../redux/slices/main';

const Home = () => {
    const dispatch = useDispatch();
    const bestScore = useSelector(getBestScore);

    const handleStart = useCallback(() => {
        dispatch(setInGame(true));

        wordShuffle();
    }, [dispatch]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleStart();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleStart]);

    return (
        <Stack alignItems="center" spacing={5} sx={{ mt: 1 }}>
            <Typography variant="h3" textAlign="center">
                Cool Words
            </Typography>
            {!!bestScore && (
                <Typography textAlign="center" title={`Achieved ${new Date(bestScore.at).toLocaleString('en-NZ')}`}>
                    Best Score: {bestScore.got}/{bestScore.outOf}
                </Typography>
            )}
            <Button variant="outlined" color="secondary" size="large" onClick={handleStart}>
                Start
            </Button>
        </Stack>
    );
};

export default Home;
