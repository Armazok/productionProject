import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName.test', () => {
    test('should return value', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                userName: '123',
            },
        };

        expect(getLoginUserName(state as IStateSchema)).toEqual('123');
    });
    test('should return false', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getLoginUserName(state as IStateSchema)).toEqual(undefined);
    });
});
