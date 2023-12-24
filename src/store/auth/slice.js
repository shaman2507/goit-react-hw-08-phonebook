import {
    currentUser,
    logOutThunk,
    loginThunk,
    registerThunk,
} from './operationsAuth';
import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.user = { ...action.payload.user };
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = { ...action.payload.user };
                state.token = action.payload.token;
                state.isLoading = false;
                state.isLoggedIn = true;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(logOutThunk.fulfilled, state => {
                state.user = { name: null, email: null };
                state.isLoading = false;
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(currentUser.pending, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
            })
            .addCase(currentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
                state.isLoggedIn = true;
            })
            .addCase(currentUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = false;
            });
    },
});

export const authReducer = authSlice.reducer;