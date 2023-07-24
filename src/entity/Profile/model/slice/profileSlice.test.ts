import {
    IProfileSchema,
    profileActions,
    profileReducers,
    updateProfileData,
    ValidateProfileError,
} from 'entity/Profile';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';

const data = {
    userName: 'Admin',
    age: 22,
    country: Country.USA,
    lastName: 'Klaus',
    firstName: 'Borza',
    currency: Currency.USD,
    city: 'California',
};
describe('profileSlice.test reducer', () => {
    test('test set readonly', () => {
        const state: DeepPartial<IProfileSchema> = {
            readonly: false,
        };
        expect(profileReducers(state as IProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });

    test('test cansel edit', () => {
        const state: DeepPartial<IProfileSchema> = { data, formData: { userName: '' } };
        expect(profileReducers(state as IProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateError: undefined,
                data,
                formData: data,
            });
    });

    test('test update profile', () => {
        const state: DeepPartial<IProfileSchema> = { formData: { userName: 'Admin' } };

        expect(
            profileReducers(
                state as IProfileSchema,
                profileActions.updateProfile({
                    userName: 'Mazok',
                }),
            ),
        )
            .toEqual({ formData: { userName: 'Mazok' } });
    });
});
describe('profileSlice.test extraReducer', () => {
    test('test update profile service pending', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducers(
                state as IProfileSchema,
                updateProfileData.pending,
            ),
        )
            .toEqual({
                isLoading: true,
                validateError: undefined,
            });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducers(
                state as IProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        )
            .toEqual({
                isLoading: false,
                validateError: undefined,
                readonly: true,
                formData: data,
                data,
            });
    });
});
