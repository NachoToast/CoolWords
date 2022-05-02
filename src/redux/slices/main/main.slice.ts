import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import allWords from '../../../data/words';
import wordShuffle from '../../../helpers/wordShuffle';
import DifficultyRating from '../../../types/Difficulty';
import { GameHistory } from '../../../types/GameHistory';
import { GameModeNames, GameModeSingle } from '../../../types/GameMode';
import Word from '../../../types/Word';
import { StoreState } from '../../store';

export interface State {
    gameMode: GameModeSingle | null;
    questionPool: Word[];
    questionNumber: number;
    currentScore: number;
    gameHistory: GameHistory;
}

export const initialState: State = {
    gameMode: null,
    questionPool: [],
    questionNumber: 0,
    currentScore: 0,
    gameHistory: {
        [GameModeNames.Streak]: {
            random: undefined,
            [DifficultyRating.VeryEasy]: undefined,
            [DifficultyRating.Easy]: undefined,
            [DifficultyRating.Medium]: undefined,
            [DifficultyRating.Hard]: undefined,
            [DifficultyRating.VeryHard]: undefined,
        },
        [GameModeNames.Letters]: {},
        [GameModeNames.Fixed10]: {
            random: undefined,
            [DifficultyRating.VeryEasy]: undefined,
            [DifficultyRating.Easy]: undefined,
            [DifficultyRating.Medium]: undefined,
            [DifficultyRating.Hard]: undefined,
            [DifficultyRating.VeryHard]: undefined,
        },
    },
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setGameMode(state, action: { payload: GameModeSingle }) {
            const newGameMode = action.payload;

            let newPool = [...(newGameMode.pool || allWords)];
            if (!newGameMode.noShuffle) newPool = wordShuffle(newPool);
            if (newGameMode.additionalPoolOptions?.amount) {
                newPool.splice(newGameMode.additionalPoolOptions.amount);
            }
            if (newPool.length === 0) {
                window.alert(`${action.payload.name} has no words to choose from, sorry :P`);
                return;
            }

            state.questionPool = newPool;
            state.gameMode = newGameMode;
        },
        clearGameMode(state) {
            state.gameMode = null;
        },
        setQuestionNumber(state, action: { payload: number }) {
            state.questionNumber = action.payload;
        },
        incrementCurrentScore(state) {
            state.currentScore++;
        },
        clearCurrentScore(state) {
            state.currentScore = 0;
        },
        setGameHistory(state, action: { payload: GameHistory }) {
            state.gameHistory = action.payload;
            localStorage.setItem('words_game_history', JSON.stringify(action.payload));
        },
    },
});

export const {
    setGameMode,
    clearGameMode,
    setQuestionNumber,
    incrementCurrentScore,
    clearCurrentScore,
    setGameHistory,
} = mainSlice.actions;

export const getGameMode = (state: StoreState) => state.main.gameMode;

export const getQuestionNumber = (state: StoreState) => state.main.questionNumber;

export const getCurrentScore = (state: StoreState) => state.main.currentScore;

export const getQuestionPool = (state: StoreState) => state.main.questionPool;

export const getGameHistory = (state: StoreState) => state.main.gameHistory;

export const loadGameHistory = createAsyncThunk('main/loadGameHistory', (_, { dispatch }) => {
    try {
        const item = localStorage.getItem('words_game_history');
        if (item) {
            dispatch(setGameHistory(JSON.parse(item)));
        }
    } catch (error) {
        localStorage.removeItem('words_game_history');
    }
});

/** If `true`, will reset the game mode (causing a return to the main menu). */
export const finishGame = createAsyncThunk('main/finishGame', (resetGameMode: boolean, { dispatch, getState }) => {
    const state = getState() as StoreState;

    dispatch(clearCurrentScore());
    dispatch(setQuestionNumber(0));
    if (resetGameMode) dispatch(clearGameMode());
    else {
        const gameMode = getGameMode(state);
        if (gameMode !== null) {
            dispatch(setGameMode(gameMode));
        }
    }
});

export default mainSlice.reducer;
