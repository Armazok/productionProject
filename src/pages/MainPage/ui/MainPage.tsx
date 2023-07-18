import { useTranslation } from 'react-i18next';

interface IMainPage {
    className?: string
}

const MainPage = ({ className }: IMainPage) => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
