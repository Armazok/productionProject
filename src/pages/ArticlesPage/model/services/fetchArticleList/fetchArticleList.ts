import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entity/Article';

export const fetchArticleList = createAsyncThunk<
    IArticle[],
    void,
    IThunkConfig<string>
>(
    'articlePage/fetchArticleList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
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
