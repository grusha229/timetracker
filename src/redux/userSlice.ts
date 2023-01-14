import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Task} from "./types";
import { current } from '@reduxjs/toolkit'
import {IUser} from "../models/IUser";
import {loginRequest, registrationRequest} from "../models/request/AuthRequest";
import AuthService from "../service/AuthService";
import {useNavigate} from "react-router";
import {json} from "react-router-dom";

export const login  = createAsyncThunk(
    'user/login',
    async function (arg: loginRequest,{dispatch}) {
        try {
            const response = await AuthService.login(arg.identifier, arg.password)
                .catch((e:any) => {
                    dispatch(setError(e.message))
                });
            localStorage.setItem('token', response.data.jwt)
            dispatch(setAuth(true));
            dispatch(setUser(response.data.user))
            dispatch(setError(null))
        } catch (e:any) {
            dispatch(setError(e.response.data.error.message))
            console.log(e);
        }
    }
);

export const registration  = createAsyncThunk(
    'user/registration',
    async function (arg: registrationRequest,{dispatch}) {
        // console.log(arg)
        try {
            const response = await AuthService.registration(arg.email, arg.fullName, arg.password, arg.username)
                .catch((e:any) => {
                    dispatch(setError(e.message))
                });
            localStorage.setItem('token', response.data.jwt)
            dispatch(setUser(response.data.user));
            response.data.user && dispatch(setAuth(true));
            dispatch(setError(null))
        } catch (e: any) {
            dispatch(setError(e.response.data.error.message));
        }
    }
);

export const logout  = createAsyncThunk(
    'user/logout',
    function (_,{dispatch}) {
        const navigate = useNavigate()

        localStorage.removeItem('token')
        dispatch(setAuth(false));
        navigate('/login')
    }
);

interface userState {
    user: IUser
    isAuth: boolean,
    error: boolean,
    status: string
}


const initialState = {
    user: {},
    isAuth: false ,
    error: false,
    status: ''
} as userState

// @ts-ignore
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        },
    },
    // extraReducers: (builder,) => {
    //     builder.addCase(login.pending, (state:userState) => {
    //         setError(false)
    //     });
    //     builder.addCase(login.rejected, (state:userState) => {
    //         setError(true);
    //         state.error = true
    //     });
    //     builder.addCase(login.fulfilled, (state:userState) => {
    //         state.error = false;
    //     });
    // }
})

export const {setAuth,setUser,setError} = userSlice.actions;

export default userSlice.reducer
