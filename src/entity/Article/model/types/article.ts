export enum ArticleTypeEnum {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleBlockTypeEnum {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface IArticleBlockBase {
    id: string
    type: ArticleBlockTypeEnum
}

export interface IArticleBlockCode extends IArticleBlockBase {
    type: ArticleBlockTypeEnum.CODE
    code: string
}

export interface IArticleBlockImage extends IArticleBlockBase {
    type: ArticleBlockTypeEnum.IMAGE
    src: string
    title: string
}

export interface IArticleBlockText extends IArticleBlockBase {
    type: ArticleBlockTypeEnum.TEXT
    paragraphs: string[]
    title?: string
}

export type ArticleBlock = IArticleBlockCode | IArticleBlockImage | IArticleBlockText

export interface IArticle {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleTypeEnum[],
    blocks: ArticleBlock[]
}
