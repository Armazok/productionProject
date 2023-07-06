import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface ISidebar {
    className?: string
}

export const Sidebar = ({ className }: ISidebar) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('sidebar');
    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div className={
            classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )
        }
        >
            <button type="button" onClick={onToggle}>{t('Переключить')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
