import type { Meta, StoryObj } from '@storybook/react';
import { GroupPanel } from './GroupPanel';
import { Button } from '../../Form/Button/Button';

const meta: Meta<typeof GroupPanel> = {
    title: 'Layout/GroupPanel',
    component: GroupPanel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'SYSTEM MONITOR',
        subtitle: 'PRIMARY SYSTEMS',
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '10px', border: '1px solid var(--lcars-orange)', color: 'var(--lcars-orange)' }}>
                    System Status: NORMAL
                </div>
                <div style={{ padding: '10px', border: '1px solid var(--lcars-orange)', color: 'var(--lcars-orange)' }}>
                    Power Output: 98%
                </div>
            </div>
        ),
    },
};

export const WithButtons: Story = {
    args: {
        title: 'CONTROLS',
        subtitle: 'ENGINEERING',
        children: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <Button>INITIATE</Button>
                <Button variant="alert">ABORT</Button>
                <Button variant="warning">DIAGNOSTIC</Button>
                <Button variant="secondary">CALIBRATE</Button>
            </div>
        ),
    },
};

export const NoSubtitle: Story = {
    args: {
        title: 'ALERTS',
        children: (
            <div style={{ color: 'var(--lcars-red)', fontSize: '1.2em' }}>
                RED ALERT
            </div>
        ),
    },
};


