import { Currency } from 'entity/Currency/model/types/currency';
import { Country } from 'entity/Country/model/types/country';

export interface IProfile {
    firstName?: string,
    lastName?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    userName?: string,
    avatar?: string
}

export interface IProfileSchema {
    data?: IProfile
    formData?: IProfile
    isLoading: boolean
    error?: string
    readonly: boolean
}
