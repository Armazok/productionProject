import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
    title: 'entity/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        user: {
            userName: 'Armazok',
            id: '1',
            avatar: 'https://media.gq-magazine.co.uk/photos/6362687ed85a7b93f28a0904/3:2/w_1011,h_674,c_limit/Sigma-grindset-patrick-bateman.jpeg',
        },
        text: 'Text',
    },
};

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        user: {
            userName: 'Armazok',
            id: '1',
            avatar: 'https://media.gq-magazine.co.uk/photos/6362687ed85a7b93f28a0904/3:2/w_1011,h_674,c_limit/Sigma-grindset-patrick-bateman.jpeg',
        },
        text: 'Text',
    },
    isLoading: true,
};
