import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/storeProvider/config/store';
import { IStateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface IStoreProvider {
    initialState?: DeepPartial<IStateSchema>
}

export const StoreProvider: FC<IStoreProvider> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as IStateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
