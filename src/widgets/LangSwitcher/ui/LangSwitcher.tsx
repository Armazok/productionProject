import {classNames} from "shared/lib/classNames";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ILangSwitcher {
    className?: string
}

export const LangSwitcher = ({className}: ILangSwitcher) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }


    return (
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggleLang}
            >
                {t('Язык')}
            </Button>
    );
}
