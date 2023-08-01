import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

interface ICard extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const Card = memo(({
    className,
    children,
    ...otherProps
}: ICard) => {
    const { t } = useTranslation();
    const mods: Mods = {};

    return (
        <div
            {...otherProps}
            className={classNames(cls.Card, mods, [className])}
        >
            {children}
        </div>
    );
});
