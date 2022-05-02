import { configureStore } from '@reduxjs/toolkit';
import mainSlice, { State as MainState } from './slices/main';

export interface StoreState {
    main: MainState;
}

const store = configureStore({
    reducer: {
        main: mainSlice,
    },
});

export default store;
