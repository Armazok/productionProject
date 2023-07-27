import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface IArticleDetailsPage {
    className?: string
}

const ArticleDetailsPage = ({
    className,
}: IArticleDetailsPage) => {
    const { t } = useTranslation('article');
    const mods: Mods = {};
    return (
        <div className={classNames(cls.ArticleDetailsPage, mods, [className])}>
            {t('Articles Details Page')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
