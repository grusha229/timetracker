export type TaskId = string;

export type TimePeriod = {
    start: number;
    end: number | null;
}

export type Task = {
    id: TaskId;
    name: string;
    creationTime: number;
    workPeriods: TimePeriod[];
    isInProgress: boolean;
};

