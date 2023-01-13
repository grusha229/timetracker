export const createTask = (
    id: string,
    name: string,
    creationTime: string,
) => ({
    type: 'CREATE_TASK',
    id,
    name,
    creationTime,
} as const);

export const removeTask = (
    id: string,
) => ({
    type: 'REMOVE_TASK',
    id,
} as const);


export const startNewTimePeriod = (
    id: string,
) => ({
    type: 'START_TIMER',
    id,
} as const);

export const stopNewTimePeriod = (
    id: string,
) => ({
    type: 'STOP_TIMER',
    id,
} as const);

const actions = {
    startNewTimePeriod,
    stopNewTimePeriod,
    createTask,
    removeTask,
}

export type Actions = {
    [Key in keyof typeof actions]: ReturnType<typeof actions[Key]>;
} [keyof typeof actions]
