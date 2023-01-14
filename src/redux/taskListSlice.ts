import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Task} from "./types";
import {registrationRequest} from "../models/request/AuthRequest";
import AuthService from "../service/AuthService";
import {setAuth, setError, setUser} from "./userSlice";
import TaskListService from "../service/TaskListService";
import {ITask} from "../models/ITask";


export const getTaskList  = createAsyncThunk(
    'tasklist/getTaskList',
    async function (_,{dispatch}) {
        // console.log(arg)
        try {
            const response = await TaskListService.getTasks()
                .catch((e:any) => {
                    dispatch(setError(e.message))
                })
            //@ts-ignore
            if (response.data.data) {
                //@ts-ignore
                (response.data.data).map((el: ITask) => {
                    dispatch(addTask(el))
                })
            }

        } catch (e: any) {
            dispatch(setError(e.response.data.error.message));
        }
    }
);

export const createTask  = createAsyncThunk(
    'tasklist/createTask',
    async function (name:string,{dispatch}) {
        // console.log(arg)
        try {
            const response = await TaskListService.createTask(name)
                .catch((e:any) => {
                    dispatch(setError(e.message))
                })
            //@ts-ignore
            dispatch(addTask(response.data.data))
        } catch (e: any) {
            dispatch(setError(e.response.data.error.message));
        }
    }
);

// @ts-ignore
const taskListSlice = createSlice({
    name: "tasklist",
    initialState: {
    //     '123456789': {
    //         id: '123456789',
    //         name: 'Заполнить Readme.md (дефолтная демо-задача)',
    //         creationTime: 1671614369000,
    //         workPeriods: [
    //             {
    //                 start: 1671614369000,
    //                 end: 1671618331000
    //             },
    //             {
    //                 start: 1671621573000,
    //                 end: 1671628774000
    //             },
    //             {
    //                 start: 1671715474000,
    //                 end: 1671715478000
    //             },
    //             {
    //                 start: 1671719079000,
    //                 end: 1671729881000
    //             }
    //         ],
    //         isInProgress: false
    //     }
    // } as Record<string, Task>,
    } as Record<string, Task>,
    reducers: {
        addTask(state, action) {
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    name: action.payload.attributes.name,
                    creationTime: action.payload.attributes.createdAt,
                    isInProgress: false,
                    workPeriods: []
                }
            }
        },
        removeTask(state, action) {
            return Object.keys(state).reduce<Record<string, Task>>((res, id) => {
                if (id !== action.payload.id) {
                    res[id] = state[id];
                }
                return res;
            }, {});
        },
        startNewTimePeriod(state, action) {
            let startTime = new Date().getTime()
            state[action.payload.id].workPeriods.push({
                start: startTime,
                end: null,
            })
            state[action.payload.id].isInProgress = true
        },
        stopNewTimePeriod(state, action) {
            let endTime = new Date().getTime()
            state[action.payload.id].workPeriods[state[action.payload.id].workPeriods.length - 1].end = endTime;

            state[action.payload.id].isInProgress = false;

        }
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

export const {removeTask,startNewTimePeriod,stopNewTimePeriod,addTask} = taskListSlice.actions;

export default taskListSlice.reducer
