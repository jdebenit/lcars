import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Form/Input',
    component: Input,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: '#000000' }],
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Enter command...',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Command Code',
        placeholder: 'Enter code...',
    },
};

export const WithValue: Story = {
    args: {
        label: 'System Name',
        value: 'USS ENTERPRISE',
        readOnly: true,
    },
};

export const Error: Story = {
    args: {
        label: 'Authorization',
        value: 'INVALID_TOKEN',
        error: 'Access Denied',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Self Destruct',
        value: 'LOCKED',
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        label: 'Log Entry',
        placeholder: 'Enter captain\'s log...',
        fullWidth: true,
    },
    parameters: {
        layout: 'padded',
    },
};


