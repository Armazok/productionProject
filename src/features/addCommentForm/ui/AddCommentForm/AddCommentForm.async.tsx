import { FC, lazy } from 'react';
import { IAddCommentForm } from './AddCommentForm';

// eslint-disable-next-line no-promise-executor-return
export const AddCommentFormAsync = lazy<FC<IAddCommentForm>>(() => new Promise((res) => setTimeout(
    () =>
        // @ts-ignore
        // eslint-disable-next-line implicit-arrow-linebreak
        res(import('./AddCommentForm')),
    1500,
)));
