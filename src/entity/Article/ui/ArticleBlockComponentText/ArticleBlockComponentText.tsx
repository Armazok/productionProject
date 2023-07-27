import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleBlockComponentText.module.scss';

interface IArticleBlockComponentText {
    className?: string
}

export const ArticleBlockComponentText = memo(({
    className,
}: IArticleBlockComponentText) => {
    const { t } = useTranslation();
    const mods: Mods = {};
    return (
        <div className={classNames(cls.ArticleBlockComponentText, mods, [className])}>
            {t('ArticleBlockComponentText')}
        </div>
    );
});
