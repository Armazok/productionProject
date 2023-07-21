import { ILoginSchema } from 'features/AuthByUserName';
import { loginActions, loginReducers } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set userName', () => {
        const state: DeepPartial<ILoginSchema> = {
            userName: 'admin',
        };
        expect(loginReducers(state as ILoginSchema, loginActions.setUserName('admin123'))).toEqual({ userName: 'admin123' });
    });
    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = {
            password: '123',
        };
        expect(loginReducers(state as ILoginSchema, loginActions.setPassword('12345'))).toEqual({ password: '12345' });
    });
});
