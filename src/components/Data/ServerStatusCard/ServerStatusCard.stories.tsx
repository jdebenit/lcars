import type { Meta, StoryObj } from '@storybook/react';
import { ServerStatusCard } from './ServerStatusCard';

const meta: Meta<typeof ServerStatusCard> = {
    title: 'Data/ServerStatusCard',
    component: ServerStatusCard,
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
};

export default meta;
type Story = StoryObj<typeof ServerStatusCard>;

export const OnlineServer: Story = {
    args: {
        server: {
            name: 'WEB-SERVER-01',
            status: 'online',
            cpu: 45,
            memory: 62,
            disk: 38,
            uptime: '45d 12h 34m',
            ip: '192.168.1.100',
        },
    },
};

export const WarningServer: Story = {
    args: {
        server: {
            name: 'DB-SERVER-02',
            status: 'warning',
            cpu: 78,
            memory: 85,
            disk: 72,
            uptime: '12d 5h 22m',
            ip: '192.168.1.101',
        },
    },
};

export const ErrorServer: Story = {
    args: {
        server: {
            name: 'API-SERVER-03',
            status: 'error',
            cpu: 95,
            memory: 92,
            disk: 88,
            uptime: '2d 3h 15m',
            ip: '192.168.1.102',
        },
    },
};

export const OfflineServer: Story = {
    args: {
        server: {
            name: 'BACKUP-SERVER-04',
            status: 'offline',
            cpu: 0,
            memory: 0,
            disk: 0,
            uptime: '0d 0h 0m',
            ip: '192.168.1.103',
        },
    },
};

export const WithoutIP: Story = {
    args: {
        server: {
            name: 'CACHE-SERVER-05',
            status: 'online',
            cpu: 32,
            memory: 48,
            disk: 25,
            uptime: '90d 8h 45m',
        },
    },
};

export const MultipleServers: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            <ServerStatusCard
                server={{
                    name: 'WEB-01',
                    status: 'online',
                    cpu: 45,
                    memory: 62,
                    disk: 38,
                    uptime: '45d 12h',
                    ip: '192.168.1.100',
                }}
            />
            <ServerStatusCard
                server={{
                    name: 'DB-01',
                    status: 'warning',
                    cpu: 78,
                    memory: 85,
                    disk: 72,
                    uptime: '12d 5h',
                    ip: '192.168.1.101',
                }}
            />
            <ServerStatusCard
                server={{
                    name: 'API-01',
                    status: 'error',
                    cpu: 95,
                    memory: 92,
                    disk: 88,
                    uptime: '2d 3h',
                    ip: '192.168.1.102',
                }}
            />
            <ServerStatusCard
                server={{
                    name: 'BACKUP-01',
                    status: 'offline',
                    cpu: 0,
                    memory: 0,
                    disk: 0,
                    uptime: '0d 0h',
                    ip: '192.168.1.103',
                }}
            />
        </div>
    ),
};

