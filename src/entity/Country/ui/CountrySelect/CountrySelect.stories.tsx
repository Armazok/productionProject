import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountrySelect } from 'entity/Country/ui/CountrySelect/CountrySelect';

export default {
    title: 'entity/CounterSelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;
const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
