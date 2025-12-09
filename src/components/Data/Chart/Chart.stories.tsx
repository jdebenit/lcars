import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';

const meta = {
    title: 'Data/Chart',
    component: Chart,
    tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bar: Story = {
    args: {
        title: 'System Efficiency',
        data: [
            { label: 'Propulsion', value: 85 },
            { label: 'Life Support', value: 92 },
            { label: 'Shields', value: 78 },
            { label: 'Sensors', value: 95 },
        ],
    },
};

export const Donut: Story = {
    args: {
        title: 'Energy Distribution',
        type: 'donut',
        data: [
            { label: 'Weapons', value: 30 },
            { label: 'Shields', value: 40 },
            { label: 'Engines', value: 20 },
            { label: 'Auxiliary', value: 10 },
        ],
    },
};

export const Horizontal: Story = {
    args: {
        title: 'Resource Levels',
        type: 'horizontal',
        data: [
            { label: 'Deuterium', value: 450 },
            { label: 'Antimatter', value: 820 },
            { label: 'Dilithium', value: 300 },
        ],
    },
};


