import { lazy } from 'react';

// eslint-disable-next-line no-promise-executor-return
export const MainPageAsync = lazy(() => new Promise((res) => setTimeout(
    () =>
        // @ts-ignore
        // eslint-disable-next-line implicit-arrow-linebreak
        res(import('./MainPage')),
    1500,
)));
