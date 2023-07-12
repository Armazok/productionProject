import { FC } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
    element?: HTMLElement
}

export const Portal: FC<IPortal> = ({
    children,
    element = document.body,
}) => (
    createPortal(children, element)
);
