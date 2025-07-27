import type {InitialStateAuth, payloadUser, User} from "./types.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";



const initialState:InitialStateAuth = {
    user: {
        login: '',
        password: '',
        status: 'default'
    },
    status: 's',
    error: ''
}

export const fetchUser = createAsyncThunk<User, User>(
    'fetchUser',
    async (data)=>{
        const response = await fetch('http://localhost:5000/api/putInUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to add todo');
        }
        return await response.json();
    })

export const fetchGetUser = createAsyncThunk(
    'getUser',
    async ()=>{
        const data = fetch('http://localhost:5000/api/user').then(res=> res.json()).then(data=> data)
        return data
    }
)

export const AuthReducer = createSlice({
    name: 'Auth',
    initialState,
    reducers: {

    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state) => {
                state.status = 'succeeded';


            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string || 'Failed to add todo';
            })
            .addCase(fetchGetUser.fulfilled, (state, action: PayloadAction<payloadUser>)=>{
                state.user =action.payload.User
            });
    }
})
export default AuthReducer.reducer