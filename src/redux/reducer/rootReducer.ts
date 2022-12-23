import {Actions} from "../actions";
import {combineReducers} from "redux";
import {Task, TaskId} from "./types";
//
// const initialState = [{
//     name: "lalala",
//     creationTime: "Fri Dec 23 2022 00:50:54 GMT+0300 (GMT+03:00)",
//     id: "123456789"
// }] as Task[];

const initialState = [] as Task[];

export type State = typeof initialState;

const taskReducer = (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    creationTime: action.creationTime
                }
            ];
        case 'REMOVE_TASK':
            return state.filter((Task) => {
                return (Task.id != action.id)
            })
        default:
            return state;
    }
}

const reducer = combineReducers({
    tasks: taskReducer,
})

export default reducer;
