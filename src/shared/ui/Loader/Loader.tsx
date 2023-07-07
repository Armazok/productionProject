import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface ILoader {
    className?: string
}

export const Loader = ({ className }: ILoader) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
