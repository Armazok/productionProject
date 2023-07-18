import { FC, lazy } from 'react';
import { ILoginForm } from './LoginForm';

// eslint-disable-next-line no-promise-executor-return
export const LoginFormAsync = lazy<FC<ILoginForm>>(() => new Promise((res) => setTimeout(
    () =>
        // @ts-ignore
        // eslint-disable-next-line implicit-arrow-linebreak
        res(import('./LoginForm')),
    1500,
)));
