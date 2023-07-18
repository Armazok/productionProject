import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema, StoreProvider } from 'app/providers/storeProvider';
import { Story } from '@storybook/react';

export const StoreDecorator = (state: DeepPartial<IStateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
