import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleBlockComponentImage } from './ArticleBlockComponentImage';

export default {
    title: 'shared/ArticleBlockComponentImage',
    component: ArticleBlockComponentImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleBlockComponentImage>;

const Template: ComponentStory<typeof ArticleBlockComponentImage> = (args) => <ArticleBlockComponentImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
