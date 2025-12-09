import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
    title: 'Feedback/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['info', 'warning', 'error', 'success'],
        },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        message: 'SYSTEM SCAN COMPLETE. NO ANOMALIES DETECTED.',
        type: 'info',
        title: 'SCAN RESULTS',
    },
};

export const Warning: Story = {
    args: {
        message: 'TEMPERATURE RISING IN SECTION 4. CHECK COOLANT LEVELS.',
        type: 'warning',
        title: 'WARNING',
        flashing: true,
    },
};

export const Error: Story = {
    args: {
        message: 'HULL BREACH DETECTED ON DECK 5. SEALING BULKHEADS.',
        type: 'error',
        title: 'CRITICAL ALERT',
        flashing: true,
    },
};
