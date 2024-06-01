// store.js
import { configureStore } from '@reduxjs/toolkit';
import CardSlice from './slice/CardSlice';

const store = configureStore({
    reducer: {
        Card: CardSlice,
    }
});

export default store;
