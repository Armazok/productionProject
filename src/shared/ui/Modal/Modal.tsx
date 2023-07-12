import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface IModal {
    className?: string
}

export const Modal: FC<IModal> = ({ className, children }) => (
    <div className={classNames(cls.Modal, {}, [className])}>
        <div className={cls.overlay}>
            <div className={cls.content}>
                {children}
            </div>
        </div>
    </div>
);
