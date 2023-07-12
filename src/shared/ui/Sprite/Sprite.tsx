import { FC } from 'react';
import SpriteSVG from '../../assets/icons/sprite.svg';

interface ILogo {
    idIcon: 'about' | 'main' | 'themeDark' | 'themeLight'
    width?: string
    height?: string
    viewBox?: string
}

export const Sprite: FC<ILogo> = ({
    idIcon,
    width,
    height,
    viewBox,
}) => (
    <svg
        width={width || '50'}
        height={height || '50'}
        viewBox={viewBox || '0 0 20 20'}
    >
        <use xlinkHref={`${SpriteSVG}#${idIcon}`} />
    </svg>
);
