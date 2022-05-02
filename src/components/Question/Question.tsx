import { Box, Button, Collapse, Stack, TextField, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allWords from '../../data';
import { difficultyColourMap, difficultyNameMap } from '../../helpers/difficultyMaps';
import markAnswer from '../../helpers/markAnswer';
import { getQuestionNumber, incrementCurrentScore, setQuestionNumber } from '../../redux/slices/main';
import Word from '../../types/Word';

const Question = () => {
    const dispatch = useDispatch();
    const questionNumber = useSelector(getQuestionNumber);

    const word = useMemo<Word>(() => allWords[questionNumber], [questionNumber]);

    const difficultyColor = useMemo<string>(() => difficultyColourMap(word.difficulty), [word.difficulty]);
    const difficultyName = useMemo<string>(() => difficultyNameMap[word.difficulty], [word.difficulty]);

    const [currentAnswer, setCurrentAnswer] = useState<string>('');

    const handleAnswerChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentAnswer(e.target.value);
    }, []);

    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
    const [isRight, setIsRight] = useState<boolean>(false);

    const handleSubmit = useCallback(() => {
        const isRight = markAnswer(currentAnswer, word);
        setIsRight(isRight);
        setHasSubmitted(true);
        if (isRight) {
            dispatch(incrementCurrentScore());
        }
    }, [currentAnswer, dispatch, word]);

    const inputRef = useRef<HTMLInputElement>();

    const handleNext = useCallback(() => {
        setHasSubmitted(false);
        dispatch(setQuestionNumber(questionNumber + 1));
        setCurrentAnswer('');
        setIsRight(false);
        inputRef.current?.focus();
    }, [dispatch, questionNumber]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (!hasSubmitted) handleSubmit();
                else handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handleSubmit, hasSubmitted]);

    return (
        <Box>
            <Typography variant="h3">{word.word}</Typography>
            <Stack direction="row">
                <div>
                    Difficulty: <span style={{ color: difficultyColor }}>{difficultyName}</span>
                </div>
            </Stack>
            <TextField
                id="pogpogopgu"
                inputRef={inputRef}
                sx={{ mt: 1 }}
                multiline
                maxRows={4}
                value={currentAnswer}
                onChange={handleAnswerChange}
                variant="outlined"
                fullWidth
                autoFocus
                autoCorrect="off"
                autoComplete="off"
            />
            <Collapse in={!hasSubmitted}>
                <Button variant="outlined" color="success" sx={{ mt: 1 }} size="large" onClick={handleSubmit}>
                    Done
                </Button>
            </Collapse>
            {hasSubmitted && (
                <Collapse in>
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="h4" color={isRight ? 'lightgreen' : 'lightcoral'}>
                            {isRight ? 'Correct!' : 'Incorrect!'}
                        </Typography>
                        <Typography color="gray">Long answer{word.longAnswers.length !== 1 ? 's' : ''}:</Typography>
                        {word.longAnswers.map((e, i) => (
                            <Typography key={i}>{e}</Typography>
                        ))}
                        <Typography color="gray">Short answer{word.simpleAnswers.length !== 1 ? 's' : ''}:</Typography>
                        {word.simpleAnswers.map((e, i) => (
                            <Typography key={i}>{e.join(', ')}</Typography>
                        ))}
                        <Button variant="outlined" color="success" sx={{ mt: 1 }} size="large" onClick={handleNext}>
                            Next Word
                        </Button>
                    </Box>
                </Collapse>
            )}
        </Box>
    );
};

export default Question;
