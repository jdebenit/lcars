import type { Meta, StoryObj } from '@storybook/react';
import { ValueLabel } from './ValueLabel';

const meta: Meta<typeof ValueLabel> = {
    title: 'Data/ValueLabel',
    component: ValueLabel,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        color: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ValueLabel>;

export const Default: Story = {
    args: {
        label: 'VERSION',
        value: '1.0.0',
    },
};

export const TechnicalDetails: Story = {
    args: {
        label: 'IP ADDRESS',
        value: '192.168.1.100',
    },
};

export const CustomColor: Story = {
    args: {
        label: 'STATUS',
        value: 'CRITICAL',
        color: 'var(--lcars-red)',
    },
};


