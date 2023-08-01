import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleViewEnum, IArticle } from 'entity/Article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleBlockTypeEnum, IArticleBlockText } from 'entity/Article/model/types/article';
import { ArticleBlockComponentText } from 'entity/Article/ui/ArticleBlockComponentText/ArticleBlockComponentText';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/RouteConfig';
import cls from './ArticleListItem.module.scss';
import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg';

interface IArticleListItem {
    className?: string
    article: IArticle
    view: ArticleViewEnum
}

export const ArticleListItem = memo(({
    className,
    article,
    view,
}: IArticleListItem) => {
    const { t } = useTranslation();
    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.view} />
            <Icon Svg={EyeIcon} />
        </>
    );

    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const mods: Mods = {};

    if (view === ArticleViewEnum.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockTypeEnum.TEXT,
        ) as IArticleBlockText;

        return (
            <div className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.userName} className={cls.userName} />
                        <Text text={article.createdAt} className={cls.data} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && (
                        <ArticleBlockComponentText block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.data} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
