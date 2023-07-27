import { IArticle } from 'entity/Article';

export interface IArticleDetailsSchema {
    isLoading: boolean
    error?: string
    data?: IArticle
}
