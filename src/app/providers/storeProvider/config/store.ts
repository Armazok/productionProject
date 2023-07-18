import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { counterReducer } from 'entiti/Counter';
import { userReducers } from 'entiti/User';
import { loginReducers } from 'features/AuthByUserName';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducers,
        loginForm: loginReducers,
    };
    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS__DEV__,
        preloadedState: initialState,
    });
}
