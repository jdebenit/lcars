import type { Meta, StoryObj } from '@storybook/react';
import { PodCard } from './PodCard';

const meta: Meta<typeof PodCard> = {
    title: 'Data/PodCard',
    component: PodCard,
    tags: ['autodocs'],
    // decorators: [
    //     (Story) => (
    //         <div style={{ width: '300px' }}>
    //             <Story />
    //         </div>
    //     ),
    // ],
};

export default meta;
type Story = StoryObj<typeof PodCard>;

export const Running: Story = {
    args: {
        pod: {
            name: 'frontend-app-7d9f8c6b5a-x9z2p',
            namespace: 'production',
            status: 'running',
            replicas: { ready: 1, total: 1 },
            restarts: 0,
            age: '2d 4h',
        },
    },
};

export const Pending: Story = {
    args: {
        pod: {
            name: 'backend-api-8f7e6d5c4b-y8w1q',
            namespace: 'staging',
            status: 'pending',
            replicas: { ready: 0, total: 1 },
            restarts: 0,
            age: '1m',
        },
    },
};

export const Failed: Story = {
    args: {
        pod: {
            name: 'database-worker-5a4b3c2d1e-z7v0r',
            namespace: 'production',
            status: 'failed',
            replicas: { ready: 0, total: 1 },
            restarts: 5,
            age: '12h',
        },
    },
};

