import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { ArticleViewEnum, IArticle } from 'entity/Article';
import { IArticlePageSchema } from 'pages/ArticlesPage/model/types/articlePageSchema';
import { fetchArticleList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

const articleAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<IStateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articleAdapter.getInitialState<IArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleViewEnum.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViewEnum>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleViewEnum;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
                state.isLoading = false;
                articleAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: articlesPageAction,
    reducer: articlesPageReducer,
} = articlePageSlice;
