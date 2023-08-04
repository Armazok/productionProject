import { lazy } from 'react';

// eslint-disable-next-line no-promise-executor-return
export const ArticleDetailsPageAsync = lazy(() => new Promise((res) => setTimeout(
    () =>
        // @ts-ignore
        // eslint-disable-next-line implicit-arrow-linebreak
        res(import('./ArticleDetailsPage')),
    400,
)));
