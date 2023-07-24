import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { getProfileFormData, IProfile } from 'entity/Profile';
import { ValidateProfileError } from 'entity/Profile/model/types/priofile';
import { validateProfileData } from '../validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<ValidateProfileError[]>>(
        'profile/updateProfileData',
        async (_, { rejectWithValue, extra, getState }) => {
            const formData = getProfileFormData(getState());
            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }
            try {
                const result = await extra.api.put<IProfile>('/profile', formData);

                if (!result.data) {
                    throw new Error();
                }

                return result.data;
            } catch (e) {
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
