import type { Meta, StoryObj } from '@storybook/react';
import { StatusBar } from './StatusBar';

const meta: Meta<typeof StatusBar> = {
    title: 'Feedback/StatusBar',
    component: StatusBar,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#000000' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['online', 'warning', 'error', 'offline'],
        },
        showPulse: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof StatusBar>;

export const Online: Story = {
    args: {
        label: 'System Status',
        value: 'ONLINE',
        status: 'online',
    },
};

export const Warning: Story = {
    args: {
        label: 'CPU Usage',
        value: '85%',
        status: 'warning',
    },
};

export const Error: Story = {
    args: {
        label: 'Database Connection',
        value: 'ERROR',
        status: 'error',
    },
};

export const Offline: Story = {
    args: {
        label: 'Backup Server',
        value: 'OFFLINE',
        status: 'offline',
    },
};

export const WithPulse: Story = {
    args: {
        label: 'Alert Status',
        value: 'CRITICAL',
        status: 'error',
        showPulse: true,
    },
};

export const WithoutValue: Story = {
    args: {
        label: 'System Operational',
        status: 'online',
    },
};

export const AllStatuses: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
            <StatusBar label="Online Status" value="OPERATIONAL" status="online" />
            <StatusBar label="Warning Status" value="85%" status="warning" />
            <StatusBar label="Error Status" value="FAILED" status="error" />
            <StatusBar label="Offline Status" value="OFFLINE" status="offline" />
            <StatusBar label="Pulse Alert" value="CRITICAL" status="error" showPulse />
        </div>
    ),
};


