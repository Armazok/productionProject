import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'pages/NotFoundPage/ui/NotFoundPage.module.scss';
import { memo } from 'react';

interface IAboutPage {
    className?: string
}

const AboutPage = memo(({ className }: IAboutPage) => {
    const { t } = useTranslation('about');

    return (
        <div className={classNames(cls.ABouPage, {}, [className])}>
            {t('О cайте')}
        </div>
    );
});

export default AboutPage;
