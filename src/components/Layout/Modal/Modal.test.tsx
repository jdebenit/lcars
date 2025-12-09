import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from './Modal';

describe('Modal', () => {
    it('renders children when open', () => {
        render(<Modal isOpen={true} onClose={() => { }}>Modal Content</Modal>);
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('does not render when closed', () => {
        render(<Modal isOpen={false} onClose={() => { }}>Modal Content</Modal>);
        expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('calls onClose when overlay clicked', () => {
        const handleClose = vi.fn();
        const { container } = render(<Modal isOpen={true} onClose={handleClose}>Content</Modal>);

        // The first child is the overlay
        fireEvent.click(container.firstChild as Element);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when content clicked', () => {
        const handleClose = vi.fn();
        render(<Modal isOpen={true} onClose={handleClose}><span>Click Me</span></Modal>);

        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClose).not.toHaveBeenCalled();
    });

    it('calls onClose on Escape key', () => {
        const handleClose = vi.fn();
        render(<Modal isOpen={true} onClose={handleClose}>Content</Modal>);

        fireEvent.keyDown(document, { key: 'Escape' });
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
