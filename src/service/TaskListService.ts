import api from "../http";
import {AxiosResponse} from "axios"
import {TaskListResponse} from "../models/response/TaskListResponse";

export default class TaskListService {
    static async getTasks():Promise<AxiosResponse<TaskListResponse>> {
        return api.get('/api/tasks?populate=*')
    }
    static async createTask(name: string):Promise<AxiosResponse<TaskListResponse>> {
        return api.post('/api/tasks?populate=*',{data: {
                name: name
            }})
    }
}
