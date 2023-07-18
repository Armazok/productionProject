import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore, IStateSchema } from 'app/providers/StoreProvider';
import { Provider } from 'react-redux';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as IStateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
