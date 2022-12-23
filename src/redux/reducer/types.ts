import type reducer from "./rootReducer";

export type TaskId = string;

type TimePeriod = {
    start: string;
    end: string;
    isInProgress: boolean;
}

export type Task = {
    id: TaskId;
    name: string;
    creationTime: string;
    workPeriods?: TimePeriod[]
};

export type State = ReturnType<typeof reducer>;
