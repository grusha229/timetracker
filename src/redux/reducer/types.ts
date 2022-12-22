import type reducer from "./rootReducer";

export type TaskId = string;

export type Task = {
    id: TaskId;
    name: string;
    time: string;
};

export type State = ReturnType<typeof reducer>;
