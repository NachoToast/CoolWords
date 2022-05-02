import { LinearProgress, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentScore, getQuestionNumber, getQuestionPool } from '../../redux/slices/main';
import DoneScreen from '../DoneScreen';
import Question from '../Question';

const Game = () => {
    const questionNumber = useSelector(getQuestionNumber);
    const currentScore = useSelector(getCurrentScore);
    const questionPool = useSelector(getQuestionPool);

    const percentDone = useMemo<number>(
        () => Math.floor((100 * (questionNumber + 1)) / questionPool.length),
        [questionPool.length, questionNumber],
    );

    if (questionNumber >= questionPool.length) {
        return <DoneScreen />;
    }

    return (
        <div>
            <Stack>
                <LinearProgress value={percentDone} sx={{ flexGrow: 1 }} variant="determinate" />
                <Stack direction="row">
                    <Typography color="gray">
                        {currentScore} Correct Answer{currentScore !== 1 ? 's' : ''}
                    </Typography>
                    <Typography color="gray" textAlign="right" sx={{ flexGrow: 1 }}>
                        {questionNumber + 1} of {questionPool.length}
                    </Typography>
                </Stack>
            </Stack>
            <Question />
        </div>
    );
};

export default Game;
