import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/themeProvider';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;
const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />;
export const Light = Template.bind({});
Light.arg = {};

export const Dark = Template.bind({});
Dark.arg = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
