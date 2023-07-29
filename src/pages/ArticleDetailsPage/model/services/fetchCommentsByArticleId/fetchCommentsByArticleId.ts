import { createAsyncThunk } from '@reduxjs/toolkit';
import { IComment } from 'entity/Comment';
import { IThunkConfig } from 'app/providers/StoreProvider';

export const fetchCommentsByArticleId = createAsyncThunk<
    IComment[],
    string | undefined,
    IThunkConfig<string>
>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        if (!articleId) {
            return rejectWithValue('Error');
        }

        try {
            const response = await extra.api.get<IComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
