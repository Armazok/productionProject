import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entity/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { IThunkConfig } from 'app/providers/StoreProvider';

interface ILoginByUserName {
    userName: string | undefined
    password: string | undefined
}

export const loginByUserName = createAsyncThunk<
    IUser,
    ILoginByUserName,
    IThunkConfig<string>>(
        'login/loginByUserName',
        async (
            authData,
            thunkApi,
        ) => {
            const { extra, dispatch, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.post<IUser>('/login', authData);

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
