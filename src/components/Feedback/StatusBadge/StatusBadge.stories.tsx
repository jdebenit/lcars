import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
    title: 'Feedback/StatusBadge',
    component: StatusBadge,
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['online', 'warning', 'error', 'offline', 'running', 'pending', 'failed', 'unknown'],
        },
        label: { control: 'text' },
        showPulse: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Online: Story = {
    args: {
        status: 'online',
    },
};

export const Warning: Story = {
    args: {
        status: 'warning',
    },
};

export const Error: Story = {
    args: {
        status: 'error',
        showPulse: true,
    },
};

export const Offline: Story = {
    args: {
        status: 'offline',
    },
};

export const Running: Story = {
    args: {
        status: 'running',
    },
};

export const Pending: Story = {
    args: {
        status: 'pending',
    },
};

export const Failed: Story = {
    args: {
        status: 'failed',
    },
};

export const WithCustomLabel: Story = {
    args: {
        status: 'online',
        label: 'SYSTEM READY',
    },
};


