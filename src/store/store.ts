// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.ts'
import filterReducer from "../moduleFilter/store/FilterReducer.ts";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        filter: filterReducer// подключаем редьюсер
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;