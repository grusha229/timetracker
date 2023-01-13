import api from "../http";
import {AxiosResponse} from "axios"
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(identifier: string,password: string):Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/api/auth/local',{identifier, password})
    }
    static async registration(email: string, fullName: string, password: string, username: string ):Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/api/auth/local/register',{email, fullName, password, username})
    }
}
