import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, delectus dignissimos eligendi in ipsam itaque mollitia obcaecati porro repellendus repudiandae! Aperiam cupiditate delectus minus, nostrum perferendis perspiciatis tempore ullam veniam! ',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, delectus dignissimos eligendi in ipsam itaque mollitia obcaecati porro repellendus repudiandae! Aperiam cupiditate delectus minus, nostrum perferendis perspiciatis tempore ullam veniam! ',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
