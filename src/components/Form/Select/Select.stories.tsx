import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'Form/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
        disabled: { control: 'boolean' },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
    { label: 'WARP CORE', value: '1' },
    { label: 'PHASERS', value: '2' },
    { label: 'LIFE SUPPORT', value: '3' },
    { label: 'SENSORS', value: '4' },
];

export const Default: Story = {
    args: {
        label: 'SELECT SYSTEM',
        options: options,
        value: '1',
        onChange: (val) => console.log('Selected:', val),
        color: 'orange',
    },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
        label: 'SYSTEM LOCKED',
    },
};

export const Colors: Story = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Select {...args} color="blue" label="BLUE" />
            <Select {...args} color="red" label="RED" />
            <Select {...args} color="purple" label="PURPLE" />
        </div>
    ),
    args: {
        ...Default.args,
    }
};
