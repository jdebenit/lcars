import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
    title: 'Form/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'LOG ENTRY',
        placeholder: 'Enter mission log...',
        rows: 5,
        color: 'orange',
    },
};

export const FullWidth: Story = {
    args: {
        label: 'DIAGNOSTIC REPORT',
        placeholder: 'Enter full report...',
        rows: 10,
        fullWidth: true,
        color: 'blue',
    },
};

export const WithError: Story = {
    args: {
        label: 'ENCRYPTED MESSAGE',
        value: '*** ACCESS DENIED ***',
        error: 'AUTHORIZATION REQUIRED',
        color: 'red',
    },
};
