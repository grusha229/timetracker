import {Actions} from "../actions";
import {combineReducers} from "redux";
import {Task, TaskId} from "./types";

const initialState = [{
    name: "lalala",
    time: "Fri Dec 23 2022 00:50:54 GMT+0300 (GMT+03:00)",
}] as Task[];

export type State = typeof initialState;

const taskReducer = (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    time: action.time
                }
            ];
        // case 'REMOVE_TASK':
        //     return state;
        default:
            return state;
    }
}

const reducer = combineReducers({
    tasks: taskReducer,
})

export default reducer;
