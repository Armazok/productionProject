import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface INavbar {
    className?: string
}

export const Navbar = ({ className }: INavbar) => {
    const { t } = useTranslation('navbar');
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    {t('Главная страница')}
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Не главная страница')}
                </AppLink>
            </div>
        </div>
    );
};
