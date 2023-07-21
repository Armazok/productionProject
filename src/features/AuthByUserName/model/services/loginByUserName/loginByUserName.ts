import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entiti/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { IThunkConfig } from 'app/providers/StoreProvider';

interface ILoginByUserName {
    userName: string
    password: string
}

export const loginByUserName = createAsyncThunk<
    IUser,
    ILoginByUserName,
    IThunkConfig<string>>(
        'login/loginByUserName',
        async (
            { userName, password },
            { rejectWithValue, dispatch, extra },
        ) => {
            try {
                const response = await extra.api.post('/login', {
                    userName, password,
                });

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));
                return response.data;
            } catch (e) {
                return rejectWithValue('Error');
            }
        },
    );
