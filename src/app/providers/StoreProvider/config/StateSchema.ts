import { ICounterSchema } from 'entiti/Counter';
import { IUserSchema } from 'entiti/User';
import { ILoginSchema } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { IProfileSchema } from 'entiti/Profile';

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema

    // Ассинхронные редюсеры
    loginForm?: ILoginSchema
    profile?: IProfileSchema
}

export type StateSchemaKey = keyof IStateSchema

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager
}
