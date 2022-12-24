import { State } from "./types";

export const taskListSelector = (state: State) => state.taskListReducer;
