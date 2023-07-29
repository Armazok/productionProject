import { IComment } from 'entity/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface IArticleDetailsCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean
    error?: string
}
