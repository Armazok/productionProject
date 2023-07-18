import { ICounterSchema } from 'entiti/Counter';
import { IUserSchema } from 'entiti/User';
import { ILoginSchema } from 'features/AuthByUserName';

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema
    loginForm: ILoginSchema
}
