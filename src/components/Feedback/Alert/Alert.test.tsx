import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
    it('renders message correctly', () => {
        render(<Alert message="System Failure" />);
        expect(screen.getByText('System Failure')).toBeInTheDocument();
    });

    it('renders title when provided', () => {
        render(<Alert message="Details" title="Warning" />);
        expect(screen.getByRole('heading', { level: 4, name: 'Warning' })).toBeInTheDocument();
    });

    it('handles dismiss click', () => {
        const handleDismiss = vi.fn();
        render(<Alert message="Close me" onDismiss={handleDismiss} />);

        fireEvent.click(screen.getByRole('alert'));
        expect(handleDismiss).toHaveBeenCalledTimes(1);
    });

    it('applies flashing class when enabled', () => {
        const { container } = render(<Alert message="Flashing" flashing />);
        expect(container.firstChild).toHaveClass(/flashing/);
    });

    it('applies type-based color class', () => {
        const { container } = render(<Alert message="Error" type="error" />);
        expect(container.firstChild).toHaveClass(/color-red/);
    });
});
