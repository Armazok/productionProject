import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleViewEnum } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface IArticleViewSelector {
    className?: string
    view: ArticleViewEnum
    onViewClick?: (view: ArticleViewEnum) => void
}

const viewTypes = [
    {
        view: ArticleViewEnum.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleViewEnum.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(({
    className,
    view,
    onViewClick,
}: IArticleViewSelector) => {
    const mods: Mods = {};

    const onClick = (newView: ArticleViewEnum) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, mods, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
