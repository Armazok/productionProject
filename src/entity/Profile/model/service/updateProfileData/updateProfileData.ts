import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { getProfileFormData, IProfile } from 'entity/Profile';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<string>>(
        'profile/updateProfileData',
        async (_, { rejectWithValue, extra, getState }) => {
            const formData = getProfileFormData(getState());

            try {
                const result = await extra.api.put<IProfile>('/profile', formData);

                return result.data;
            } catch (e) {
                return rejectWithValue('Error');
            }
        },
    );
