import { IStateSchema } from 'app/providers/StoreProvider';
import { ArticleViewEnum } from 'entity/Article';

export const getArticlesPageIsLoading = (state: IStateSchema) => state.articlePage?.isLoading || false;
export const getArticlesPageView = (state: IStateSchema) => state.articlePage?.view || ArticleViewEnum.SMALL;
export const getArticlesPageError = (state: IStateSchema) => state.articlePage?.error;
export const getArticlesPageNum = (state: IStateSchema) => state.articlePage?.page || 1;
export const getArticlesPageLimit = (state: IStateSchema) => state.articlePage?.limit || 9;
export const getArticlesPageHasMore = (state: IStateSchema) => state.articlePage?.hasMore;
