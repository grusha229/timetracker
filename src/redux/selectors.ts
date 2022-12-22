import { State } from "./reducer/types";

export const taskListSelector = (state: State) => state.tasks;
