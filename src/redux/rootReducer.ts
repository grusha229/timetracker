import {combineReducers} from "redux";
import {taskListReducer} from "./newTasks/taskListReducer";

export const reducer = combineReducers({
    taskListReducer,
})
