import type { Meta, StoryObj } from '@storybook/react';
import { CircularGauge } from './CircularGauge';

const meta: Meta<typeof CircularGauge> = {
    title: 'Feedback/CircularGauge',
    component: CircularGauge,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: '#000000' }],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100 },
        },
        size: {
            control: { type: 'number', min: 50, max: 300 },
        },
        color: {
            control: 'select',
            options: ['orange', 'blue', 'purple', 'red', 'yellow'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof CircularGauge>;

export const Default: Story = {
    args: {
        value: 75,
        label: 'Efficiency',
    },
};

export const Small: Story = {
    args: {
        value: 42,
        size: 80,
        label: 'CPU',
        color: 'blue',
    },
};

export const Large: Story = {
    args: {
        value: 98,
        size: 200,
        label: 'Shield Integrity',
        color: 'orange',
    },
};

export const Critical: Story = {
    args: {
        value: 15,
        label: 'Life Support',
        color: 'red',
    },
};

export const Full: Story = {
    args: {
        value: 100,
        label: 'Charge',
        color: 'yellow',
    },
};

export const AllColors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <CircularGauge value={85} label="Orange" color="orange" size={100} />
            <CircularGauge value={65} label="Blue" color="blue" size={100} />
            <CircularGauge value={45} label="Purple" color="purple" size={100} />
            <CircularGauge value={25} label="Red" color="red" size={100} />
            <CircularGauge value={95} label="Yellow" color="yellow" size={100} />
        </div>
    ),
};


