import {configureStore} from "@reduxjs/toolkit";
import taskListSlice from "./taskListSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer:{
        taskList: taskListSlice,
        user: userSlice
    },
})
