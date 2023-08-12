import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleViewEnum, IArticle } from 'entity/Article';
import { ArticleListItem } from 'entity/Article/ui/ArticleListItem/ArticleListItem';
import {
    ArticleListItemSkeleton,
} from 'entity/Article/ui/ArticleListItem/ArticleListItemSkeleton /ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface IArticleList {
    className?: string
    articles: IArticle[]
    isLoading?: boolean
    view?: ArticleViewEnum
}

const getSkeletons = (view: ArticleViewEnum) => new Array(view === ArticleViewEnum.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo(({
    className,
    articles,
    view = ArticleViewEnum.SMALL,
    isLoading,
}: IArticleList) => {
    const mods: Mods = {};

    const renderArticle = (article: IArticle) => (
        <ArticleListItem
            className={cls.card}
            key={article.id}
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, mods, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
