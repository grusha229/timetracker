export interface loginRequest {
    identifier: string;
    password: string;
}

export interface registrationRequest {
    email: string;
    fullName: string;
    password: string;
    username: string;
}
