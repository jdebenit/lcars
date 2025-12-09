import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusBar } from './StatusBar';

describe('StatusBar', () => {
    it('renders label and value', () => {
        render(<StatusBar label="Shields" value="100%" status="online" />);
        expect(screen.getByText('Shields')).toBeInTheDocument();
        expect(screen.getByText('100%')).toBeInTheDocument();
    });

    it('applies status class', () => {
        const { container } = render(<StatusBar label="Hull" status="error" />);
        expect(container.firstChild).toHaveClass(/status-error/);
    });

    it('applies pulse class when enabled', () => {
        const { container } = render(<StatusBar label="Warp" status="online" showPulse />);
        expect(container.firstChild).toHaveClass(/pulse/);
    });
});
