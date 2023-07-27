import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleBlockComponentText } from './ArticleBlockComponentText';

export default {
    title: 'shared/ArticleBlockComponentText',
    component: ArticleBlockComponentText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleBlockComponentText>;

const Template: ComponentStory<typeof ArticleBlockComponentText> = (args) => <ArticleBlockComponentText {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
