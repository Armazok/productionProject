import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginForm {
    className?: string

}

export const LoginForm = ({
    className,

}: ILoginForm) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('Введите имя')}
                className={cls.input}
                autoFocus
            />
            <Input
                placeholder={t('Введите пароль')}
                className={cls.input}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>

    );
};
