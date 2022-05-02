import { Button, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wordShuffle from '../../helpers/wordShuffle';
import { setGameMode } from '../../redux/slices/main';
import { GameModeNames } from '../../types/GameMode';
import gameModes from '../../data/modes';
import ModeSelector from './ModeSelector';

const Home = () => {
    const dispatch = useDispatch();

    return (
        <Stack alignItems="center" spacing={5} sx={{ mt: 1 }}>
            <Typography variant="h3" textAlign="center">
                Cool Words
            </Typography>
            {/* {!!bestScore && (
                <Typography textAlign="center" title={`Achieved ${new Date(bestScore.at).toLocaleString('en-NZ')}`}>
                    Best Score: {bestScore.got}/{bestScore.outOf}
                </Typography>
            )} */}
            {/* <Button variant="outlined" color="secondary" size="large" onClick={handleStart}>
                Start
            </Button> */}
            <ModeSelector modes={Object.values(gameModes)} />
        </Stack>
    );
};

export default Home;
