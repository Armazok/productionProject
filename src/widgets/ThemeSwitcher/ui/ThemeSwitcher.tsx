import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/themeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Light from '../../../shared/assets/icons/light.svg';
import Dark from '../../../shared/assets/icons/dark.svg';

interface IThemeSwitcher {
    className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcher) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <Light />
                : <Dark />}

            {/* {theme === Theme.DARK */}
            {/*    ? <Sprite idIcon="themeDark" /> */}
            {/*    : <Sprite idIcon="themeLight" />} */}
        </Button>
    );
};
