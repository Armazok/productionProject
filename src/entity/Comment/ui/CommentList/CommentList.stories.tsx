import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entity/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            user: {
                userName: 'Armazok',
                id: '1',
                avatar: 'https://media.gq-magazine.co.uk/photos/6362687ed85a7b93f28a0904/3:2/w_1011,h_674,c_limit/Sigma-grindset-patrick-bateman.jpeg',
            },
            text: 'Text',
        },
        {
            id: '2',
            user: {
                userName: 'Admin',
                id: '2',
                avatar: 'https://w7.pngwing.com/pngs/552/807/png-transparent-pepe-frog-illustration-gif-imgur-tenor-know-your-meme-twitch-emotes-vertebrate-meme-fictional-character.png',
            },
            text: 'Text Text',
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
