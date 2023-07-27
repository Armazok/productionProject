import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleBlockComponentCode } from './ArticleBlockComponentCode';

export default {
    title: 'shared/ArticleBlockComponentCode',
    component: ArticleBlockComponentCode,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleBlockComponentCode>;

const Template: ComponentStory<typeof ArticleBlockComponentCode> = (args) => <ArticleBlockComponentCode {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
