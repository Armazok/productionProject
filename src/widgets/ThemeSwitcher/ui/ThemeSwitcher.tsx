import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Dark from 'shared/assets/icons/theme-dark.svg';
import Light from 'shared/assets/icons/theme-light.svg';
import { memo } from 'react';

interface IThemeSwitcher {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcher) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <Dark />
                : <Light />}
        </Button>
    );
});
