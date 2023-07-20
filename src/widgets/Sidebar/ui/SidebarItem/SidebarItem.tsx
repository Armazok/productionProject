import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ISidebarItemsType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface ISidebarItem {
    item: ISidebarItemsType
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItem) => {
    const { t } = useTranslation();
    const mods = {
        [cls.collapsed]: collapsed,
    };
    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, mods, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
