import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from 'entity/Profile';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                error: 'error',
            },
        };

        expect(getProfileError(state as IStateSchema)).toEqual('error');
    });
    test('should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getProfileError(state as IStateSchema)).toEqual(undefined);
    });
});
