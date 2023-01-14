import axios from "axios";

export const API_URL = 'http://localhost:1337/';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}`: '';
    return config;
})

export default api
