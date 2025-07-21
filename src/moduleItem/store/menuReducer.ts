import {createSlice} from "@reduxjs/toolkit";
import type {initialStateMenu} from "./types.ts";

const initialState:initialStateMenu = {
    menu:[]
}

export const MenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        getMenuFromServer(){

        }
    }
})
export default MenuSlice.reducer