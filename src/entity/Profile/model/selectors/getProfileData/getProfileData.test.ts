import { IStateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
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
                data,
            },
        };

        expect(getProfileData(state as IStateSchema)).toEqual(data);
    });
    test('should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getProfileData(state as IStateSchema)).toEqual(undefined);
    });
});
