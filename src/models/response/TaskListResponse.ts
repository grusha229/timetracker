import {ITask} from "../ITask";


export interface TaskListResponse {
    data: {
        data: ITask[],
        meta: any
    },
    meta: any
}
