import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileLoading,
    getProfileReadOnly,
    getProfileValidateError,
    profileActions,
    ProfileCard,
    profileReducers,
    ValidateProfileError,
} from 'entity/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileFormData } from 'entity/Profile/model/selectors/getProflleFormData/getProflleFormData';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country/model/types/country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface IProfilePage {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducers,
};

const ProfilePage = memo(({
    className,
}: IProfilePage) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const formData = useSelector(getProfileFormData);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateError);
    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранение'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и Фамилия обязательны'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback((firstName?: string | '') => {
        dispatch(profileActions.updateProfile({ firstName }));
    }, [dispatch]);

    const onChangeLastName = useCallback((lastName?: string | '') => {
        dispatch(profileActions.updateProfile({ lastName }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((city?: string | '') => {
        dispatch(profileActions.updateProfile({ city }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((avatar?: string | '') => {
        dispatch(profileActions.updateProfile({ avatar }));
    }, [dispatch]);

    const onChangeUserName = useCallback((userName?: string | '') => {
        dispatch(profileActions.updateProfile({ userName }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    readonly={readonly}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUserName={onChangeUserName}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
