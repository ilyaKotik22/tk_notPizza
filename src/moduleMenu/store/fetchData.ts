import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Post, PostState} from "./types.ts";

export const fetchData = createAsyncThunk<Post[]>(
    'itemsFetch',
    async ()=> {
        const response = await fetch('http://localhost:5000/api/items').then(res=> res.json()).then(data=> data)
        return response
    }
)
export const initialState: PostState = {
    data: [],
    loading: false,
    error: null,
};
export const postSlice = createSlice({
    name: 'fetchData',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchData.pending, (state)=>{
                state.loading = true
                state.error = null
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<Post[]>)=>{
                state.loading =false
                state.data =action.payload
            })
            .addCase(fetchData.rejected,(state,action)=>{
                state.loading =false
                state.error = action.error.message || 'error in loading'
            })
    }
})
export default postSlice.reducer