import {createSlice} from "@reduxjs/toolkit";
import type {InitialState} from "./types.ts";
const initialState: InitialState = {
    value: 0,
};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state){
            state.value += 1;
        },
        decrement(state){
            state.value-=1
        },
    },
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer