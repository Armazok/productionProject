import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileAge } from '../../model/selectors/getProfileData/getProfileAge/getProfileAge';
import { getProfileAvatar } from '../../model/selectors/getProfileData/getProfileAvatar/getProfileAvatar';
import { getProfileCountry } from '../../model/selectors/getProfileData/getProfileCountry/getProfileCountry';
import { getProfileCurrency } from '../../model/selectors/getProfileData/getProfileCurrency/getProfileCurrency';
import { getProfileFirstName } from '../../model/selectors/getProfileData/getProfileFirstName/getProfileFirstName';
import { getProfileLastName } from '../../model/selectors/getProfileData/getProfileLastName/getProfileLastName';
import { getProfileUserName } from '../../model/selectors/getProfileData/getProfileUserName/getProfileUserName';
import cls from './ProfileCard.module.scss';

interface IProfileCard {
    className?: string
}

export const ProfileCard = memo(({
    className,
}: IProfileCard) => {
    const { t } = useTranslation('profile');
    const firstName = useSelector(getProfileFirstName);
    const lastName = useSelector(getProfileLastName);
    const userName = useSelector(getProfileUserName);
    const age = useSelector(getProfileAge);
    const avatar = useSelector(getProfileAvatar);
    const city = useSelector(getProfileAge);
    const country = useSelector(getProfileCountry);
    const currency = useSelector(getProfileCurrency);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={userName}
                    placeholder={t('Ваше имя пользователя')}
                    className={cls.input}
                />
                <Input
                    value={firstName}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={lastName}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
});
