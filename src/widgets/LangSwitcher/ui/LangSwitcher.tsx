import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ILangSwitcher {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(({ className, short }: ILangSwitcher) => {
    const { t, i18n } = useTranslation();

    const toggleLang = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLang}
        >
            {t(!short ? 'Язык' : 'Короткий язык')}
        </Button>
    );
});
