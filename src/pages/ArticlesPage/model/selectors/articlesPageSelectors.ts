import { IStateSchema } from 'app/providers/StoreProvider';
import { ArticleViewEnum } from 'entity/Article';

export const getArticlesPageIsLoading = (state: IStateSchema) => state.articlePage?.isLoading || false;
export const getArticlesPageView = (state: IStateSchema) => state.articlePage?.view || ArticleViewEnum.SMALL;
export const getArticlesPageError = (state: IStateSchema) => state.articlePage?.error;
