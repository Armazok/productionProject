import { IUser } from 'entity/User';

export interface IComment {
    id: string
    user: IUser
    text: string
}
