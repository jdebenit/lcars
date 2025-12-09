import type { Meta, StoryObj } from '@storybook/react';
import { Bar } from './Bar';

const meta: Meta<typeof Bar> = {
    title: 'Layout/Bar',
    component: Bar,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
        rounded: {
            control: 'select',
            options: ['none', 'left', 'right', 'both', 'top', 'bottom'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Bar>;

export const Default: Story = {
    args: {
        children: 'SYSTEM READY',
        color: 'blue',
        rounded: 'both',
    },
};

export const Styles: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Bar color="orange" rounded="left">LEFT ROUNDED</Bar>
            <Bar color="purple" rounded="right">RIGHT ROUNDED</Bar>
            <Bar color="red" rounded="both">BOTH ROUNDED</Bar>
            <Bar color="tan" rounded="none">SQUARED</Bar>
        </div>
    ),
};
