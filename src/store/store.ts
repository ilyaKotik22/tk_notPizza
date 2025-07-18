// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.ts'

export const store = configureStore({
    reducer: {
        counter: counterReducer, // подключаем редьюсер
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;