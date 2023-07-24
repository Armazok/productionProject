import { IStateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { getProfileFormData } from 'entity/Profile';

describe('getProfileFormData.test', () => {
    test('should return data', () => {
        const formData = {
            userName: 'Admin',
            age: 22,
            country: Country.USA,
            lastName: 'Klaus',
            firstName: 'Borza',
            currency: Currency.USD,
            city: 'California',
        };
        const state: DeepPartial<IStateSchema> = {
            profile: {
                formData,
            },
        };

        expect(getProfileFormData(state as IStateSchema)).toEqual(formData);
    });
    test('should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getProfileFormData(state as IStateSchema)).toEqual(undefined);
    });
});
