import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { IArticleBlockImage } from 'entity/Article/model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleBlockComponentImage.module.scss';

interface IArticleBlockComponentImage {
    className?: string
    block: IArticleBlockImage
}

export const ArticleBlockComponentImage = memo(({
    className,
    block,
}: IArticleBlockComponentImage) => {
    const { t } = useTranslation();
    const mods: Mods = {};
    return (
        <div className={classNames(cls.ArticleBlockComponentImage, mods, [className])}>
            <img
                className={cls.image}
                alt={block.title}
                src={block.src}
            />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
