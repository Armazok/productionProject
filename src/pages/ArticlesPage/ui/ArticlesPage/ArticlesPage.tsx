import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleViewEnum, ArticleViewSelector } from 'entity/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageAction, articlesPageReducer, getArticles } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';

interface IArticlesPage {
    className?: string
}

const reducer: ReducersList = {
    articlePage: articlesPageReducer,
};

const ArticlesPage = ({
    className,
}: IArticlesPage) => {
    const { t } = useTranslation('article');
    const mods: Mods = {};
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleViewEnum) => {
        dispatch(articlesPageAction.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticleList());
        dispatch(articlesPageAction.initState());
    });

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={classNames(cls.ArticlesPage, mods, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
