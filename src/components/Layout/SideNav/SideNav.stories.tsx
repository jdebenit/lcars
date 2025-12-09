import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideNav } from './SideNav';
import { Bar } from '../Bar/Bar';

const meta = {
    title: 'Layout/SideNav',
    component: SideNav,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
    },
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    { id: '1', label: 'MAIN BRIDGE', active: true },
    { id: '2', label: 'ENGINEERING', active: false },
    { id: '3', label: 'TRANSPORTER', active: false },
    { id: '4', label: 'SICKBAY', active: false },
];

export const Default: Story = {
    args: {
        title: 'DECK 1',
        items: items,
        color: 'purple',
        width: 190,
    },
    render: (args) => (
        <div style={{ height: '600px', padding: '20px' }}>
            <SideNav {...args} />
        </div>
    )
};
