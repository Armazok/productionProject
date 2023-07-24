import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData, ValidateProfileError } from 'entity/Profile';
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

describe('updateProfileData.ts', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: {
                    ...data,
                    lastName: '',
                },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
