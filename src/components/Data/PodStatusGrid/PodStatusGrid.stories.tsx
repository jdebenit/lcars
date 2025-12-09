import type { Meta, StoryObj } from '@storybook/react';
import { PodStatusGrid } from './PodStatusGrid';

const meta: Meta<typeof PodStatusGrid> = {
    title: 'Data/PodStatusGrid',
    component: PodStatusGrid,
    parameters: {
        layout: 'padded',
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
type Story = StoryObj<typeof PodStatusGrid>;

const samplePods = [
    {
        name: 'web-frontend-1',
        namespace: 'production',
        status: 'running' as const,
        replicas: { ready: 3, total: 3 },
        restarts: 0,
        age: '45d',
    },
    {
        name: 'api-backend-1',
        namespace: 'production',
        status: 'running' as const,
        replicas: { ready: 5, total: 5 },
        restarts: 2,
        age: '30d',
    },
    {
        name: 'database-primary',
        namespace: 'production',
        status: 'running' as const,
        replicas: { ready: 1, total: 1 },
        restarts: 0,
        age: '90d',
    },
    {
        name: 'cache-redis-1',
        namespace: 'production',
        status: 'pending' as const,
        replicas: { ready: 2, total: 3 },
        restarts: 1,
        age: '2h',
    },
    {
        name: 'worker-jobs-1',
        namespace: 'staging',
        status: 'failed' as const,
        replicas: { ready: 0, total: 2 },
        restarts: 5,
        age: '1d',
    },
    {
        name: 'monitoring-agent',
        namespace: 'system',
        status: 'unknown' as const,
        replicas: { ready: 0, total: 1 },
        restarts: 0,
        age: '5m',
    },
];

export const Default: Story = {
    args: {
        pods: samplePods,
    },
};

export const RunningPods: Story = {
    args: {
        pods: samplePods.filter(pod => pod.status === 'running'),
    },
};

export const MixedStatuses: Story = {
    args: {
        pods: samplePods,
    },
};

export const SinglePod: Story = {
    args: {
        pods: [samplePods[0]],
    },
};

export const FailedPods: Story = {
    args: {
        pods: [
            {
                name: 'worker-jobs-1',
                namespace: 'staging',
                status: 'failed',
                replicas: { ready: 0, total: 2 },
                restarts: 5,
                age: '1d',
            },
            {
                name: 'api-gateway-2',
                namespace: 'production',
                status: 'failed',
                replicas: { ready: 0, total: 3 },
                restarts: 10,
                age: '3h',
            },
        ],
    },
};

