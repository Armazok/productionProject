import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article';

interface IFetchArticleById {
}

export const fetchArticleById = createAsyncThunk<
    IArticle,
    string,
    IThunkConfig<string>
>(
    'articleDetails/FetchArticleById',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
