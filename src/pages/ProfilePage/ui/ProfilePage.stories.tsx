import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        formData: {
            userName: 'Admin',
            age: 22,
            country: Country.USA,
            lastName: 'Klaus',
            firstName: 'Borza',
            currency: Currency.USD,
            city: 'California',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        formData: {
            userName: 'Admin',
            age: 22,
            country: Country.USA,
            lastName: 'Klaus',
            firstName: 'Borza',
            currency: Currency.USD,
            city: 'California',
        },
    },
})];
