import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entity/Profile';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import avatar from 'shared/assets/test/storybook.jpg';

export default {
    title: 'entity/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        userName: 'Admin',
        age: 22,
        country: Country.USA,
        lastName: 'Klaus',
        firstName: 'Borza',
        currency: Currency.USD,
        city: 'California',
        avatar,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
