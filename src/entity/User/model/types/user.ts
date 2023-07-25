export interface IUser {
    id: string
    userName: string
}

export interface IUserSchema {
    authData?: IUser

    _inited: boolean
}
