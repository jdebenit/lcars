import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
    title: 'Form/Radio',
    component: Radio,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
    },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioGroup: Story = {
    render: () => {
        const [selected, setSelected] = React.useState('A');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Radio label="MODE A" checked={selected === 'A'} onChange={() => setSelected('A')} color="orange" />
                <Radio label="MODE B" checked={selected === 'B'} onChange={() => setSelected('B')} color="blue" />
                <Radio label="MODE C" checked={selected === 'C'} onChange={() => setSelected('C')} color="purple" />
            </div>
        );
    }
};
