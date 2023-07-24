import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from 'entity/Profile';

describe('getProfileReadOnly.test', () => {
    test('should return readonly', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                readonly: true,
            },
        };

        expect(getProfileReadOnly(state as IStateSchema)).toEqual(true);
    });
    test('should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getProfileReadOnly(state as IStateSchema)).toEqual(undefined);
    });
});
