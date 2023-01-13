import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Task} from "./types";
import { current } from '@reduxjs/toolkit'
//
// export const stopNewTimePeriod  = createAsyncThunk(
//     'tast/stopNewTimePeriod',
//     async function (id) {
//         const response = await fetch('http://localhost:3003/Messages');
//
//         const data = await response.json();
//
//         // @ts-ignore
//         return data[id]
//     }
// );

// stopNewTimePeriod(state, action) {
//     let endTime = new Date().getTime()
//     let period = state[action.payload.id].workPeriods
//
//     period[period.length - 1] = {
//         ...period[period.length - 1],
//         end: endTime,
//     }
//     return {
//         ...state,
//         [action.payload.id]: {
//             ...state[action.payload.id],
//             isInProgress: false,
//             workPeriods: period
//         }
//     };
// }

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
        createTask(state, action) {
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    name: action.payload.taskName,
                    creationTime: action.payload.time,
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

export const {createTask,removeTask,startNewTimePeriod,stopNewTimePeriod} = taskListSlice.actions;

export default taskListSlice.reducer
