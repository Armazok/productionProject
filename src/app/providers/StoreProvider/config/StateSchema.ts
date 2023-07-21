import { ICounterSchema } from 'entiti/Counter';
import { IUserSchema } from 'entiti/User';
import { ILoginSchema } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { IProfileSchema } from 'entiti/Profile';
import { AxiosInstance } from 'axios';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';

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

export interface IThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface IThunkConfig<T> {
    rejectValue: T
    extra: IThunkExtraArg
}
