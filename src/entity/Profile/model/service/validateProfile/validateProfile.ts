import { IProfile } from 'entity/Profile';
import { ValidateProfileError } from 'entity/Profile/model/types/priofile';

export const validateProfileData = (profIle?: IProfile) => {
    if (!profIle) {
        return [ValidateProfileError.NO_DATA];
    }

    const errors: ValidateProfileError[] = [];

    const {
        firstName,
        lastName,
        age,
        country,
    } = profIle;
    if (!firstName || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
