import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducers } from 'entity/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entity/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlockComponentCode } from 'entity/Article/ui/ArticleBlockComponentCode/ArticleBlockComponentCode';
import { ArticleBlockComponentImage } from 'entity/Article/ui/ArticleBlockComponentImage/ArticleBlockComponentImage';
import { ArticleBlockComponentText } from 'entity/Article/ui/ArticleBlockComponentText/ArticleBlockComponentText';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleBlock, ArticleBlockTypeEnum } from '../../model/types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

interface IArticleDetails {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducers,
};

export const ArticleDetails = memo(({
    className,
    id,
}: IArticleDetails) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const data = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockTypeEnum.CODE:
            return <ArticleBlockComponentCode key={block.id} className={cls.block} block={block} />;
        case ArticleBlockTypeEnum.IMAGE:
            return <ArticleBlockComponentImage key={block.id} className={cls.block} block={block} />;
        case ArticleBlockTypeEnum.TEXT:
            return <ArticleBlockComponentText key={block.id} className={cls.block} block={block} />;
        default:
            return null;
        }
    }, []);

    const mods: Mods = {};
    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={data?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={data?.title}
                    text={data?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(data?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={data?.createdAt} />
                </div>
                {data?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.ArticleDetails, mods, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
