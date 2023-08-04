import { lazy } from 'react';

// eslint-disable-next-line no-promise-executor-return
export const ArticlesPageAsync = lazy(() => new Promise((res) => setTimeout(
    () =>
        // @ts-ignore
        // eslint-disable-next-line implicit-arrow-linebreak
        res(import('./ArticlesPage')),
    400,
)));
