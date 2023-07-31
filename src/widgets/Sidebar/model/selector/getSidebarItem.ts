import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entity/User';
import { RoutePath } from 'shared/config/routeConfig/RouteConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import { ISidebarItemsType } from 'widgets/Sidebar/model/types/sidebar';
import ProfileIcon from '../../../../shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from '../../../../shared/assets/icons/article-20-20.svg';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sideBarItemList: ISidebarItemsType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная страница',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },

        ];
        if (userData) {
            sideBarItemList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профайл',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }
        return sideBarItemList;
    },
);
