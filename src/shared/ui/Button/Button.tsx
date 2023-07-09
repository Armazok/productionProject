import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<IButton> = ({
    className, children, theme, ...otherProps
}) => (
    <button
        type="button"
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
