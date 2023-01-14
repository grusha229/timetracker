import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";
import {loginRequest, registrationRequest} from "../models/request/AuthRequest";
import AuthService from "../service/AuthService";


export const login  = createAsyncThunk(
    'user/login',
    async function (arg: loginRequest,{dispatch}) {
        try {
            const response = await AuthService.login(arg.identifier, arg.password)
                .catch((e:any) => {
                    dispatch(setError(e.message))
                })
                .then(() => {
                    //@ts-ignore
                    if (response.data) {
                        //@ts-ignore
                        localStorage.setItem('token', response.data.jwt);
                        dispatch(setAuth(true));
                        //@ts-ignore
                        dispatch(setUser(response.data.user))
                        dispatch(setError(null))
                    }
                })

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
                })
                // .then((response) => {
                //     //@ts-ignore
                //     if (response.data) {
                        //@ts-ignore
                        localStorage.setItem('token', response.data.jwt);
                        dispatch(setAuth(true));
                        //@ts-ignore
                        dispatch(setUser(response.data.user))
                        dispatch(setError(null))
                    // }
                // })
        } catch (e: any) {
            dispatch(setError(e.response.data.error.message));
        }
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
        logout(state) {
            state.isAuth = false
        }
    }
})

export const {setAuth,setUser,setError,logout} = userSlice.actions;

export default userSlice.reducer
