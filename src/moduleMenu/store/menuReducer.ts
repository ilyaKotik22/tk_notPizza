import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {PostMenu, PostState} from "./types.ts";



const initialState:PostState = {
    data: {
        items:[]
    },
    loading: false,
    error: null,
}

export const fetchDataMenu = createAsyncThunk<PostMenu, void, { rejectValue: string }>(
    'itemsFetch',
    async ()=> {
        const data = await fetch('http://localhost:5000/api/items').then(res => res.json()).then(data => data)
        return data as PostMenu
    }
)

export const menuReducer = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        getMenuFromServer(){

        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchDataMenu.pending, (state)=>{
                state.loading = true
                state.error = null
            })
            .addCase(fetchDataMenu.fulfilled, (state, action: PayloadAction<PostMenu>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDataMenu.rejected,(state,action)=>{
                state.loading =false
                state.error = action.error.message || 'error in loading'
            })
    }
})

export default menuReducer.reducer