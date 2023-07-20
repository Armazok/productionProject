import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducers } from 'entiti/Profile';

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

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>

        </DynamicModuleLoader>

    );
});

export default ProfilePage;
