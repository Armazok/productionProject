import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface IPageLoader {
    className?: string
}

export const PageLoader = ({ className }: IPageLoader) => (
    <div className={classNames(cls.Page__loader, {}, [className])}>
        <Loader />
    </div>
);
