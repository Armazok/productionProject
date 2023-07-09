import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/themeProvider';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;
export const Light = Template.bind({});
Light.arg = {};

export const Dark = Template.bind({});
Dark.arg = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];