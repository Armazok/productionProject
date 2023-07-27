import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsSliceReducers } from 'entity/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entity/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
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
    articleDetails: articleDetailsSliceReducers,
};

export const ArticleDetails = memo(({
    className,
    id,
}: IArticleDetails) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const data = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    // const isLoading = true;
    const error = useSelector(getArticleDetailsError);

    const mods: Mods = {};

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [id, dispatch]);

    let content;
    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
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
            // eslint-disable-next-line i18next/no-literal-string
            <div>Article Details</div>
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
