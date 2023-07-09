import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/themeProvider';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;
const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;
export const Light = Template.bind({});
Light.arg = {};

export const Dark = Template.bind({});
Dark.arg = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
