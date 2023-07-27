import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface IArticlesPage {
    className?: string
}

const ArticlesPage = ({
    className,
}: IArticlesPage) => {
    const { t } = useTranslation('article');
    const mods: Mods = {};
    return (
        <div className={classNames(cls.ArticlesPage, mods, [className])}>
            {t('Articles Page')}
        </div>
    );
};

export default memo(ArticlesPage);
