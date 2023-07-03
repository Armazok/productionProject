import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface INavbar {
    className?: string
}

export const Navbar = ({className}: INavbar) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    Главная станица
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Не главная страница
                </AppLink>
            </div>
        </div>
    );
}


