import {classNames} from "shared/lib/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLink extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<IAppLink> = ({
                                          className,
                                          children,
                                          to,
                                          theme = AppLinkTheme.PRIMARY,
                                          ...otherProps
}) => {
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
}
