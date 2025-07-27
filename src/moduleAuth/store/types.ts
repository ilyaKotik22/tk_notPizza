export type InitialStateAuth ={
    user: User
    status:string,
    error: string
}
export type payloadUser = {
    User: User
}
export type User ={
    login: string;
    password: string
    status: string
}
