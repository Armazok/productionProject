import { Currency } from 'entity/Currency/model/types/currency';
import { Country } from 'entity/Country/model/types/country';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface IProfile {
    id?: string,
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
    validateError?: ValidateProfileError[]
}
