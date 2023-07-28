import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text lorem',
    text: 'Text lorem Text lorem Text lorem',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Text lorem',
    text: 'Text lorem Text lorem Text lorem',
    theme: TextTheme.ERROR,
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Text lorem',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text lorem Text lorem Text lorem',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text lorem',
    text: 'Text lorem Text lorem Text lorem',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Text lorem',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text lorem Text lorem Text lorem',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Text lorem',
    text: 'Text lorem Text lorem Text lorem',
    size: TextSize.L,
};
