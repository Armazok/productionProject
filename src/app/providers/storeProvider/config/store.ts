import { configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';

export function createReduxStore(initialState?: IStateSchema) {
    return configureStore<IStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS__DEV__,
        preloadedState: initialState,
    });
}
