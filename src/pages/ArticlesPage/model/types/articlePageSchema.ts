import { EntityState } from '@reduxjs/toolkit';
import { ArticleViewEnum, IArticle } from 'entity/Article';

export interface IArticlePageSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string

    view: ArticleViewEnum

    // Pagination
    page: number
    limit?: number
    hasMore: boolean
}
