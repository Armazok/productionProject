import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LangSwitcher } from './LangSwitcher';
import { Theme } from '../../../app/providers/themeProvider';

export default {
    title: 'widget/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;
export const Light = Template.bind({});
Light.arg = {};

export const Dark = Template.bind({});
Dark.arg = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];