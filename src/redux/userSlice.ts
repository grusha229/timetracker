import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Task} from "./types";
import { current } from '@reduxjs/toolkit'
import {IUser} from "../models/IUser";
import {loginRequest, registrationRequest} from "../models/request/AuthRequest";
import AuthService from "../service/AuthService";

export const login  = createAsyncThunk(
    'user/login',
    async function (arg: loginRequest) {
        try {
            const response = await AuthService.login(arg.identifier, arg.password);
            // localStorage.setItem('token', response.data.jwt)
            setAuth(true);
            setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }
);

export const registration  = createAsyncThunk(
    'user/registration',
    async function (arg: registrationRequest,{dispatch}) {
        console.log(arg)
        try {
            const response = await AuthService.registration(arg.email, arg.fullName, arg.password, arg.username);
            localStorage.setItem('token', response.data.jwt)
            dispatch(setUser(response.data.user));
            response.data.user && dispatch(setAuth(true));
        } catch (e) {
            console.log(e)
        }
    }
);

// @ts-ignore
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {} as IUser,
        isAuth: false as boolean
    },
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
    },
    // extraReducers: {
    //     [fetchMessages.pending]: (state) => {
    //         state.status = "pending";
    //         state.error = null;
    //     },
    //     [fetchMessages.fulfilled]: (state, action) => {
    //         state.status = "fulfilled";
    //         state.messages = action.payload;
    //     },
    //     [fetchMessages.rejected]: (state) => {
    //         state.status = "error";
    //         state.error = true;
    //     },
    // }
})

export const {setAuth,setUser} = userSlice.actions;

export default userSlice.reducer
