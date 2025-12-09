import type { Meta, StoryObj } from '@storybook/react';
import { ApplicationMonitor } from './ApplicationMonitor';

const meta: Meta<typeof ApplicationMonitor> = {
    title: 'Data/ApplicationMonitor',
    component: ApplicationMonitor,
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
type Story = StoryObj<typeof ApplicationMonitor>;

export const OnlineApplication: Story = {
    args: {
        application: {
            name: 'API Gateway',
            version: 'v2.5.1',
            status: 'online',
            endpoints: [
                { name: '/api/users', status: 'online', responseTime: 45 },
                { name: '/api/products', status: 'online', responseTime: 32 },
                { name: '/api/orders', status: 'online', responseTime: 58 },
            ],
            logs: [
                { timestamp: '10:45:23', level: 'info', message: 'Request processed successfully' },
                { timestamp: '10:45:20', level: 'info', message: 'Database connection established' },
                { timestamp: '10:45:15', level: 'info', message: 'Cache hit for user data' },
                { timestamp: '10:45:10', level: 'info', message: 'Authentication successful' },
            ],
        },
    },
};

export const WarningApplication: Story = {
    args: {
        application: {
            name: 'Payment Service',
            version: 'v1.8.3',
            status: 'warning',
            endpoints: [
                { name: '/api/payments', status: 'warning', responseTime: 450 },
                { name: '/api/refunds', status: 'online', responseTime: 120 },
                { name: '/api/webhooks', status: 'warning', responseTime: 380 },
            ],
            logs: [
                { timestamp: '11:23:45', level: 'warning', message: 'High response time detected' },
                { timestamp: '11:23:40', level: 'info', message: 'Payment processed' },
                { timestamp: '11:23:35', level: 'warning', message: 'Connection pool near limit' },
                { timestamp: '11:23:30', level: 'info', message: 'Webhook delivered' },
            ],
        },
    },
};

export const ErrorApplication: Story = {
    args: {
        application: {
            name: 'Email Service',
            version: 'v3.1.0',
            status: 'error',
            endpoints: [
                { name: '/api/send', status: 'error', responseTime: 5000 },
                { name: '/api/templates', status: 'offline' },
                { name: '/api/queue', status: 'warning', responseTime: 890 },
            ],
            logs: [
                { timestamp: '12:15:30', level: 'error', message: 'SMTP connection failed' },
                { timestamp: '12:15:25', level: 'error', message: 'Template rendering error' },
                { timestamp: '12:15:20', level: 'warning', message: 'Queue size exceeds threshold' },
                { timestamp: '12:15:15', level: 'error', message: 'Database timeout' },
                { timestamp: '12:15:10', level: 'info', message: 'Retry attempt initiated' },
            ],
        },
    },
};

export const OfflineApplication: Story = {
    args: {
        application: {
            name: 'Analytics Engine',
            version: 'v4.2.0',
            status: 'offline',
            endpoints: [
                { name: '/api/events', status: 'offline' },
                { name: '/api/reports', status: 'offline' },
                { name: '/api/metrics', status: 'offline' },
            ],
            logs: [
                { timestamp: '09:30:00', level: 'error', message: 'Service stopped unexpectedly' },
                { timestamp: '09:29:55', level: 'error', message: 'Fatal exception occurred' },
                { timestamp: '09:29:50', level: 'warning', message: 'Memory limit exceeded' },
            ],
        },
    },
};

export const MultipleApplications: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
            <ApplicationMonitor
                application={{
                    name: 'API Gateway',
                    version: 'v2.5.1',
                    status: 'online',
                    endpoints: [
                        { name: '/api/users', status: 'online', responseTime: 45 },
                        { name: '/api/products', status: 'online', responseTime: 32 },
                    ],
                    logs: [
                        { timestamp: '10:45:23', level: 'info', message: 'Request processed' },
                        { timestamp: '10:45:20', level: 'info', message: 'Connection established' },
                    ],
                }}
            />
            <ApplicationMonitor
                application={{
                    name: 'Payment Service',
                    version: 'v1.8.3',
                    status: 'warning',
                    endpoints: [
                        { name: '/api/payments', status: 'warning', responseTime: 450 },
                    ],
                    logs: [
                        { timestamp: '11:23:45', level: 'warning', message: 'High response time' },
                    ],
                }}
            />
        </div>
    ),
};

