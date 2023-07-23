import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileLoading,
    getProfileReadOnly,
    profileActions,
    ProfileCard,
    profileReducers,
} from 'entity/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileFormData } from 'entity/Profile/model/selectors/getProflleFormData/getProflleFormData';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country/model/types/country';
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
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const formData = useSelector(getProfileFormData);
    const readonly = useSelector(getProfileReadOnly);

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
