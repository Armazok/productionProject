import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleViewEnum } from 'entity/Article';
import { ArticleList } from './ArticleList';

export default {
    title: 'shared/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const isLoadingBig = Template.bind({});
isLoadingBig.args = {
    isLoading: true,
    articles: [],
    view: ArticleViewEnum.BIG,
};
