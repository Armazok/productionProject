import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './Code.module.scss';

interface ICode {
    className?: string
    children: ReactNode
}

export const Code = memo(({
    className,
    children,
}: ICode) => {
    const mods: Mods = {};
    return (
        <pre className={classNames(cls.Code, mods, [className])}>
            <Button className={cls.copyBtn}>Копировать</Button>
            <code>
                {children}
            </code>
        </pre>
    );
});
