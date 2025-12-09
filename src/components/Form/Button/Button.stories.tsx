import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Form/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#000000' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'alert', 'success', 'warning'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
        size: 'md',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
        size: 'md',
    },
};

export const Alert: Story = {
    args: {
        children: 'Alert Button',
        variant: 'alert',
        size: 'md',
    },
};

export const Success: Story = {
    args: {
        children: 'Success Button',
        variant: 'success',
        size: 'md',
    },
};

export const Warning: Story = {
    args: {
        children: 'Warning Button',
        variant: 'warning',
        size: 'md',
    },
};

export const Small: Story = {
    args: {
        children: 'Small',
        variant: 'primary',
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        children: 'Medium',
        variant: 'primary',
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        children: 'Large',
        variant: 'primary',
        size: 'lg',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        variant: 'primary',
        size: 'md',
        disabled: true,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="alert">Alert</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};


