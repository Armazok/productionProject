import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface ISkeleton {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}

export const Skeleton = memo(({
    className,
    height,
    border,
    width,
}: ISkeleton) => {
    const mods: Mods = {};

    const styles: CSSProperties = {
        width,
        borderRadius: border,
        height,
    };

    return (
        <div
            className={classNames(cls.Skeleton, mods, [className])}
            style={styles}
        />
    );
});
