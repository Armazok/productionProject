import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface IPage {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = memo(({
    className,
    children,
    onScrollEnd,
}: IPage) => {
    const mods: Mods = {};
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, mods, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
