import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../../Form/Button/Button';

const meta = {
    title: 'Layout/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper to handle state
const ModalWrapper = (args: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div style={{ padding: '20px', color: 'var(--lcars-orange)' }}>
                    <h2 style={{ borderBottom: '2px solid var(--lcars-orange)', marginBottom: '10px' }}>ACCESS GRANTED</h2>
                    <p>Personnel file authenticated.</p>
                    <p>Rank: Commander</p>
                    <p>Assignment: U.S.S. Enterprise</p>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <Button onClick={() => setIsOpen(false)} color="red">CLOSE</Button>
                        <Button onClick={() => setIsOpen(false)}>CONFIRM</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export const Default: Story = {
    render: (args) => <ModalWrapper {...args} />,
    args: {
        isOpen: false, // Controlled by wrapper
    },
};


