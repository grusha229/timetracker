import type {reducer} from "./rootReducer";

export type TaskId = string;

type TimePeriod = {
    start: string;
    end: string | null;
}

export type Task = {
    id: TaskId;
    name: string;
    creationTime: string;
    workPeriods: TimePeriod[];
    isInProgress: boolean;
};

export type State = ReturnType<typeof reducer>;
