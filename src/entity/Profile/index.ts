export { updateProfileData } from './model/service/updateProfileData/updateProfileData';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
export { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
export { getProfileFormData } from 'entity/Profile/model/selectors/getProflleFormData/getProflleFormData';
export {
    getProfileValidateError,
} from 'entity/Profile/model/selectors/getProfileValidateError/getProfileValidateError';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';
export { fetchProfileData } from './model/service/fetchProfileData/fetchProfileData';
export { profileActions, profileReducers } from './model/slice/profileSlice';
export { IProfile, IProfileSchema, ValidateProfileError } from './model/types/priofile';
