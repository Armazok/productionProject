import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Story } from '@storybook/react';
import { loginReducers } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducer: DeepPartial<ReducersMapObject<IStateSchema>> = {
    loginForm: loginReducers,
};
export const StoreDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
