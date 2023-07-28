import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { IArticleBlockText } from 'entity/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleBlockComponentText.module.scss';

interface IArticleBlockComponentText {
    className?: string
    block: IArticleBlockText
}

export const ArticleBlockComponentText = memo(({
    className,
    block,
}: IArticleBlockComponentText) => {
    const { t } = useTranslation();
    const mods: Mods = {};
    return (
        <div className={classNames(cls.ArticleBlockComponentText, mods, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((pr, index) => (
                <Text
                    key={pr}
                    text={pr}
                    className={cls.paragraphs}
                />
            ))}
        </div>
    );
});
