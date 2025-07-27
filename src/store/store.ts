// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.ts'
import filterReducer from "../moduleFilter/store/FilterReducer.ts";
import menuReducer from "../moduleMenu/store/menuReducer.ts";
import authReducer from  '../moduleAuth/store/AuthReducer.ts'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        filter: filterReducer,
        menu: menuReducer,
        user: authReducer
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
