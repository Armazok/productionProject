import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from 'entity/Profile';

export const fetchProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<string>>(
        'profile/fetchProfileData',
        async (_, { rejectWithValue, extra }) => {
            try {
                const result = await extra.api.get<IProfile>('/profile');

                return result.data;
            } catch (e) {
                return rejectWithValue('Error');
            }
        },
    );
