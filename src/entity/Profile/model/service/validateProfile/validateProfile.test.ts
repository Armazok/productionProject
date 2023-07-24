import { validateProfileData } from 'entity/Profile/model/service/validateProfile/validateProfile';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { ValidateProfileError } from 'entity/Profile';

const data = {
    userName: 'Admin',
    age: 22,
    country: Country.USA,
    lastName: 'Klaus',
    firstName: 'Borza',
    currency: Currency.USD,
    city: 'California',
};
describe('validateProfile.ts', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({
            ...data,
            firstName: '',
            lastName: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
