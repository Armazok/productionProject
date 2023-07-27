import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleBlockComponentImage.module.scss';

interface IArticleBlockComponentImage {
    className?: string
}

export const ArticleBlockComponentImage = memo(({
    className,
}: IArticleBlockComponentImage) => {
    const { t } = useTranslation();
    const mods: Mods = {};
    return (
        <div className={classNames(cls.ArticleBlockComponentImage, mods, [className])}>
            {t('ArticleBlockComponentImage')}
        </div>
    );
});
