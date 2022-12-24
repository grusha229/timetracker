import {combineReducers} from "redux";
import {taskListReducer} from "./newTasks/taskListReducer";
import {taskDetailsReducer} from "./taskDetails/taskDetailsReducer";


export const reducer = combineReducers({
    taskListReducer,
})
