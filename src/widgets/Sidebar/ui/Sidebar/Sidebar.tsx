import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/RouteConfig';
import cls from './Sidebar.module.scss';
import Main from '../../../../shared/assets/icons/main-20-20.svg';
import About from '../../../../shared/assets/icons/about-20-20.svg';

interface ISidebar {
    className?: string
}

export const Sidebar = ({ className }: ISidebar) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('sidebar');
    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    cls.Sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <Main className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная страница')}
                    </span>
                </AppLink>

                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <About className={cls.icon} />
                    <span className={cls.link}>
                        {t('Не главная страница')}
                    </span>
                </AppLink>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
