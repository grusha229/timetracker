import {Actions} from "./../actions";
import {Task} from "../types";

// const initialState = {
//         '123456789': {
//             id: '123456789',
//             name: '123456789',
//             creationTime: 1671614369000,
//             workPeriods: [
//                 {
//                     start: 1671614369000,
//                     end: 1671618331000
//                 },
//                 {
//                     start: 1671621573000,
//                     end: 1671628774000
//                 },
//                 {
//                     start: 1671715474000,
//                     end: 1671715478000
//                 },
//                 {
//                     start: 1671719079000,
//                     end: 1671729881000
//                 }
//             ],
//             isInProgress: false
//         }
// } as Record<string, Task>

const initialState = {} as Record<string, Task>


export type State = typeof initialState;

export const taskListReducer = (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    name: action.name,
                    creationTime: action.creationTime,
                    isInProgress: false,
                    workPeriods: []
                }
            };
        case 'REMOVE_TASK':
            return Object.keys(state).reduce<State>((res, id) => {
                if (id !== action.id) {
                    res[id] = state[id];
                }
                return res;
            }, {});

        case "START_TIMER":
                let startTime = new Date().getTime()
                let periods = state[action.id].workPeriods

                periods.push({
                    start: startTime,
                    end: null,
                })

                console.log(periods)

                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        isInProgress: true,
                        workPeriods: periods
                    }
                };

        case "STOP_TIMER":
                let endTime = new Date().getTime()
                let period = state[action.id].workPeriods

                period[period.length - 1] = {
                    ...period[period.length - 1],
                    end: endTime,
                }
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        isInProgress: false,
                        workPeriods: period
                    }
                };

        default:
            return state;
    }
}

