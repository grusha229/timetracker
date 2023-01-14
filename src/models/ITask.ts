export interface ITask {
    id: string
    attributes: {
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        isInProgress: boolean,
        TimePeriod: any[],
        user: object
    }
}
