import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, SVGProps, VFC } from 'react';
import cls from './Icon.module.scss';

interface IIcon {
    className?: string
    Svg: VFC<SVGProps<SVGSVGElement>>

}

export const Icon = memo(({
    className,
    Svg,
}: IIcon) => {
    const mods: Mods = {};

    return (
        <Svg className={classNames(cls.Icon, mods, [className])} />
    );
});
