import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from 'entity/Profile';

export const fetchProfileData = createAsyncThunk<
    IProfile,
    string,
    IThunkConfig<string>>(
        'profile/fetchProfileData',
        async (profileId, { rejectWithValue, extra }) => {
            try {
                const result = await extra.api.get<IProfile>(`/profile/${profileId}`);

                if (!result.data) {
                    throw new Error();
                }

                return result.data;
            } catch (e) {
                return rejectWithValue('Error');
            }
        },
    );
