import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
    title: 'Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'ACTIVATE SHIELDS',
        checked: false,
        onChange: (checked) => console.log('Checked:', checked),
        color: 'orange',
    },
};

export const Disabled: Story = {
    args: {
        label: 'AUTO-DESTRUCT',
        checked: true,
        disabled: true,
        color: 'red',
        onChange: () => { },
    },
};

export const Group: Story = {
    render: () => {
        const [c1, setC1] = React.useState(true);
        const [c2, setC2] = React.useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Checkbox label="MAIN POWER" checked={c1} onChange={setC1} color="blue" />
                <Checkbox label="AUX POWER" checked={c2} onChange={setC2} color="tan" />
            </div>
        );
    }
};
