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

const actions = {
    createTask,
    removeTask,
};

export type Actions = {
    [Key in keyof typeof actions]: ReturnType<typeof actions[Key]>;
} [keyof typeof actions]
