import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StoreState } from '../../store';

interface BestScore {
    got: number;
    outOf: number;
    at: number;
}

export interface State {
    inGame: boolean;
    questionNumber: number;
    bestScore: BestScore | null;
    currentScore: number;
}

export const initialState: State = {
    inGame: false,
    questionNumber: 0,
    bestScore: null,
    currentScore: 0,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setInGame(state, action: { payload: boolean }) {
            state.inGame = action.payload;
        },
        setQuestionNumber(state, action: { payload: number }) {
            state.questionNumber = action.payload;
        },
        setBestScore(state, action: { payload: BestScore }) {
            state.bestScore = action.payload;
            localStorage.setItem('words_best_score', JSON.stringify(action.payload));
        },
        incrementCurrentScore(state) {
            state.currentScore++;
        },
        clearCurrentScore(state) {
            state.currentScore = 0;
        },
    },
});

export const { setInGame, setQuestionNumber, setBestScore, incrementCurrentScore, clearCurrentScore } =
    mainSlice.actions;

export const getInGame = (state: StoreState) => state.main.inGame;

export const getQuestionNumber = (state: StoreState) => state.main.questionNumber;

export const getBestScore = (state: StoreState) => state.main.bestScore;

export const getCurrentScore = (state: StoreState) => state.main.currentScore;

export const loadBestScore = createAsyncThunk('main/loadBestScore', () => {
    try {
        const storedBest = localStorage.getItem('words_best_score');
        if (storedBest) {
            setBestScore(JSON.parse(storedBest));
        }
    } catch (error) {
        //
    }
});

export default mainSlice.reducer;
