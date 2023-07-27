import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleBlockComponentCode.module.scss';

interface IArticleBlockComponentCode {
    className?: string
}

export const ArticleBlockComponentCode = memo(({
    className,
}: IArticleBlockComponentCode) => {
    const { t } = useTranslation();
    const mods: Mods = {};
    return (
        <div className={classNames(cls.ArticleBlockComponentCode, mods, [className])}>
            {t('ArticleBlockComponentCode')}
        </div>
    );
});
