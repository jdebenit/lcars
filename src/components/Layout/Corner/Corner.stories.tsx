import type { Meta, StoryObj } from '@storybook/react';
import { Corner } from './Corner';

const meta: Meta<typeof Corner> = {
    title: 'Layout/Corner',
    component: Corner,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan', 'white', 'gray'],
        },
        corner: {
            control: 'select',
            options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        },
        width: { control: 'number' },
        height: { control: 'number' },
    },
};

export default meta;
type Story = StoryObj<typeof Corner>;

export const Components: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <Corner color="orange" corner="top-left" />
            <Corner color="blue" corner="top-right" />
            <Corner color="purple" corner="bottom-left" />
            <Corner color="red" corner="bottom-right" />
        </div>
    ),
};

export const AllCorners: Story = {
    args: {
        color: 'tan',
        width: 150,
        height: 80,
    },
    render: (args) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '320px' }}>
            <Corner {...args} corner="top-left" />
            <Corner {...args} corner="top-right" />
            <Corner {...args} corner="bottom-left" />
            <Corner {...args} corner="bottom-right" />
        </div>
    ),
};
