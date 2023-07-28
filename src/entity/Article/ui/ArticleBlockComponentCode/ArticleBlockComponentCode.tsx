import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { IArticleBlockCode } from 'entity/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleBlockComponentCode.module.scss';

interface IArticleBlockComponentCode {
    className?: string
    block: IArticleBlockCode
}

export const ArticleBlockComponentCode = memo(({
    className,
    block,
}: IArticleBlockComponentCode) => {
    const { t } = useTranslation();
    const mods: Mods = {};
    return (
        <div className={classNames(cls.ArticleBlockComponentCode, mods, [className])}>
            <Code>
                {block.code}
            </Code>
        </div>
    );
});
