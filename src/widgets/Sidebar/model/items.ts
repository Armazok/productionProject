import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/RouteConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface ISidebarItemsType {
    path: string
    text: string
    Icon: VFC<SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: ISidebarItemsType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная страница',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'Не главная страница',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'PROFILE PAGE',
        authOnly: true,
    },
];
