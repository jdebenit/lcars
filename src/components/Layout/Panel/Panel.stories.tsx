import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
    title: 'Layout/Panel',
    component: Panel,
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
        color: {
            control: 'select',
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
    args: {
        title: 'System Status',
        color: 'orange',
        children: (
            <div>
                <p>Panel content goes here. This is a LCARS-styled panel component.</p>
                <p>It can contain any React children.</p>
            </div>
        ),
    },
};

export const WithoutTitle: Story = {
    args: {
        color: 'blue',
        children: (
            <div>
                <p>This panel has no title.</p>
            </div>
        ),
    },
};

export const Orange: Story = {
    args: {
        title: 'Orange Panel',
        color: 'orange',
        children: <p>This is an orange LCARS panel.</p>,
    },
};

export const Blue: Story = {
    args: {
        title: 'Blue Panel',
        color: 'blue',
        children: <p>This is a blue LCARS panel.</p>,
    },
};

export const Purple: Story = {
    args: {
        title: 'Purple Panel',
        color: 'purple',
        children: <p>This is a purple LCARS panel.</p>,
    },
};

export const Red: Story = {
    args: {
        title: 'Red Panel',
        color: 'red',
        children: <p>This is a red LCARS panel.</p>,
    },
};

export const Yellow: Story = {
    args: {
        title: 'Yellow Panel',
        color: 'yellow',
        children: <p>This is a yellow LCARS panel.</p>,
    },
};

export const Tan: Story = {
    args: {
        title: 'Tan Panel',
        color: 'tan',
        children: <p>This is a tan LCARS panel.</p>,
    },
};

export const AllColors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
            <Panel title="Orange Panel" color="orange">
                <p>Orange LCARS panel</p>
            </Panel>
            <Panel title="Blue Panel" color="blue">
                <p>Blue LCARS panel</p>
            </Panel>
            <Panel title="Purple Panel" color="purple">
                <p>Purple LCARS panel</p>
            </Panel>
            <Panel title="Red Panel" color="red">
                <p>Red LCARS panel</p>
            </Panel>
            <Panel title="Yellow Panel" color="yellow">
                <p>Yellow LCARS panel</p>
            </Panel>
            <Panel title="Tan Panel" color="tan">
                <p>Tan LCARS panel</p>
            </Panel>
        </div>
    ),
};


