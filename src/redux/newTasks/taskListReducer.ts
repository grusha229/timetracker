import {Actions} from "./../actions";
import {Task} from "../types";

// const initialState = [] as Task[];
// const initialState = [{
//     id:'21321321',
//     name:"fsdafdas",
//     isInProgress: false,
//     creationTime: "Sat Dec 24 2022 00:32:25 GMT+0300 (GMT+03:00)",
//     workPeriods: [{start: '',end: ""}]
// }] as Task[];

const initialState = {
    "123456789": {
        id: "123456789",
        name: "123456789",
        creationTime: '',
        workPeriods: [],
        isInProgress: false,
    }
} as Record<string, Task>

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
            return () => {
                let startTime = new Date().toString()
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
            }

        case "STOP_TIMER":
            return () => {
                let endTime = new Date().toString()
                let periods = state[action.id].workPeriods

                periods[periods.length - 1] = {
                    ...periods[periods.length - 1],
                    end: endTime,
                }
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        isInProgress: false,
                        workPeriods: periods
                    }
                };
            }

        default:
            return state;
    }
}

