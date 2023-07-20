import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { IUser, IUserSchema } from 'entiti/User';

const initialState: IUserSchema = {};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthData: (state, action: PayloadAction<IUser>) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state, action: PayloadAction<IUser>) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducers } = userSlice;
