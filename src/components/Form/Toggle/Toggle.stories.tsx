import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
import { useState } from 'react';

const meta: Meta<typeof Toggle> = {
    title: 'Form/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: '#000000' }],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['orange', 'blue', 'purple', 'red', 'yellow'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const ToggleWrapper = (args: any) => {
    const [checked, setChecked] = useState(args.checked || false);
    return <Toggle {...args} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
    render: (args) => <ToggleWrapper {...args} />,
    args: {
        label: 'Main Power',
    },
};

export const Checked: Story = {
    render: (args) => <ToggleWrapper {...args} />,
    args: {
        label: 'Shields',
        checked: true,
        color: 'blue',
    },
};

export const RedAlert: Story = {
    render: (args) => <ToggleWrapper {...args} />,
    args: {
        label: 'Red Alert',
        checked: true,
        color: 'red',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Warp Drive',
        checked: false,
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Life Support',
        checked: true,
        disabled: true,
        color: 'yellow',
    },
};


