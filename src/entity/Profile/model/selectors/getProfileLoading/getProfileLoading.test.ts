import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from 'entity/Profile';

describe('getProfileLoading.test', () => {
    test('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                isLoading: true,
            },
        };

        expect(getProfileLoading(state as IStateSchema)).toEqual(true);
    });
    test('should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getProfileLoading(state as IStateSchema)).toEqual(undefined);
    });
});
