import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Frame } from './Frame';
import { Corner } from '../Corner/Corner';
import { Bar } from '../Bar/Bar';

const meta = {
    title: 'Layout/Frame',
    component: Frame,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
    },
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'MAIN SENSORS',
        color: 'tan',
        children: <div style={{ minHeight: '100px', border: '1px dashed #444', padding: '10px' }}>Frame Content Area</div>,
    },
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Frame title="TACTICAL" color="red">
                <div style={{ padding: '10px' }}>Red Alert Status</div>
            </Frame>
            <Frame title="SCIENCE" color="blue">
                <div style={{ padding: '10px' }}>Sensor Sweep in Progress</div>
            </Frame>
        </div>
    )
};
