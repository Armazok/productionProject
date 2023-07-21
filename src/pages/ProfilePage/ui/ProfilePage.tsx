import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducers } from 'entiti/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>

        </DynamicModuleLoader>

    );
});

export default ProfilePage;
