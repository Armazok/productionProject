import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface IMainPage {
    className?: string
}

const MainPage = memo(({ className }: IMainPage) => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
