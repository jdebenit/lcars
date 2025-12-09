import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
    title: 'Feedback/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
    },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'PROCESSING',
        color: 'orange',
    },
};

export const Scanning: Story = {
    args: {
        text: 'SCANNING',
        color: 'blue',
    },
};

export const Alert: Story = {
    args: {
        text: 'RED ALERT',
        color: 'red',
        fullScreen: false,
    },
};
