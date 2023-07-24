import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateError, ValidateProfileError } from 'entity/Profile';

describe('getProfileValidateError.test', () => {
    test('should return ValidateError', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };

        expect(getProfileValidateError(state as IStateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getProfileValidateError(state as IStateSchema)).toEqual(undefined);
    });
});
