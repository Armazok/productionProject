import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface INavbar {
    className?: string
}

export const Navbar = ({ className }: INavbar) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
            >
                Главная станица
            </AppLink>
            <AppLink
                to="/about"
                theme={AppLinkTheme.SECONDARY}
            >
                Не главная страница
            </AppLink>
        </div>
    </div>
);
