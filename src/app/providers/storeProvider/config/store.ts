import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducers } from 'entities/User';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducers,
    };
    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS__DEV__,
        preloadedState: initialState,
    });
}
