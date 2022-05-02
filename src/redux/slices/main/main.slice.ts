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
        [GameModeNames.Random]: undefined,
    },
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setGameMode(state, action: { payload: GameModeSingle }) {
            const newGameMode = action.payload;

            let newPool = [...(newGameMode.pool || allWords)];
            if (!newGameMode.noShuffle) newPool = wordShuffle(newGameMode.pool || allWords);
            if (newGameMode.additionalPoolOptions?.amount) {
                newPool.splice(newGameMode.additionalPoolOptions.amount);
            }

            state.questionPool = newPool;
            state.gameMode = newGameMode;
        },
        setQuestionNumber(state, action: { payload: number }) {
            state.questionNumber = action.payload;
        },
        incrementCurrentScore(state) {
            state.currentScore++;
        },
        finishGame(state) {
            state.currentScore = 0;
            state.questionNumber = 0;
            state.gameMode = null;
        },
        setGameHistory(state, action: { payload: GameHistory }) {
            state.gameHistory = action.payload;
            localStorage.setItem('words_game_history', JSON.stringify(action.payload));
        },
    },
});

export const { setGameMode, setQuestionNumber, incrementCurrentScore, finishGame, setGameHistory } = mainSlice.actions;

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

export default mainSlice.reducer;
