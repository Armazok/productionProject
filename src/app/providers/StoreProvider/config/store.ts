import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entiti/Counter';
import { userReducers } from 'entiti/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';

export function createReduxStore(
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducers,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS__DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
