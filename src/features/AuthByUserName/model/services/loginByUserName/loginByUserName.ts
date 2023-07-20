import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userActions } from 'entiti/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface ILoginByUserName {
    userName: string
    password: string
}

export const loginByUserName = createAsyncThunk<IUser, ILoginByUserName, { rejectValue: string }>(
    'login/loginByUserName',
    async ({ userName, password }, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', {
                userName, password,
            });

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Error');
        }
    },
);
