import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusBadge } from './StatusBadge';

describe('StatusBadge', () => {
    it('renders status text uppercased by default', () => {
        render(<StatusBadge status="online" />);
        expect(screen.getByText('ONLINE')).toBeInTheDocument();
    });

    it('renders custom label', () => {
        render(<StatusBadge status="online" label="Connected" />);
        expect(screen.getByText('Connected')).toBeInTheDocument();
    });

    it('applies status class correctly', () => {
        const { container } = render(<StatusBadge status="error" />);
        expect(container.firstChild).toHaveClass(/statusError/);
    });

    it('renders pulse element when enabled', () => {
        const { container } = render(<StatusBadge status="online" showPulse />);
        expect(container.querySelector('span')).toBeInTheDocument(); // Pulse is a span
    });
});
