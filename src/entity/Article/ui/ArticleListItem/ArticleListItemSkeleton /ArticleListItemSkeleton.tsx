import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleViewEnum } from 'entity/Article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from '../ArticleListItem.module.scss';

interface IArticleListItemSkeleton {
    className?: string
    view: ArticleViewEnum
}

export const ArticleListItemSkeleton = memo(({
    className,
    view,
}: IArticleListItemSkeleton) => {
    const { t } = useTranslation();
    const mods: Mods = {};

    if (view === ArticleViewEnum.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} className={cls.userName} />
                        <Skeleton width={150} height={16} className={cls.data} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />

                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
