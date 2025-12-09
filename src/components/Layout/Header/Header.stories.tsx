import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
    title: 'Layout/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#000000' },
            ],
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        title: 'LCARS System',
        subtitle: 'Library Computer Access/Retrieval System',
    },
};

export const WithoutSubtitle: Story = {
    args: {
        title: 'Command Center',
    },
};

export const DashboardHeader: Story = {
    args: {
        title: 'Server Monitoring',
        subtitle: 'Real-time Infrastructure Status',
    },
};

export const StatusHeader: Story = {
    args: {
        title: 'System Status',
        subtitle: 'All Systems Operational',
    },
};


