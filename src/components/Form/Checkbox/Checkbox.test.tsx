import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('renders label', () => {
        render(<Checkbox checked={false} onChange={() => { }} label="Accept Terms" />);
        expect(screen.getByText('Accept Terms')).toBeInTheDocument();
    });

    it('calls onChange when clicked', () => {
        const handleChange = vi.fn();
        render(<Checkbox checked={false} onChange={handleChange} label="Check me" />);

        const container = screen.getByText('Check me').parentElement;
        if (container) {
            fireEvent.click(container);
            expect(handleChange).toHaveBeenCalledWith(true);
        }
    });

    it('renders checked state', () => {
        const { container } = render(<Checkbox checked={true} onChange={() => { }} />);
        expect(container.querySelector('[class*="checked"]')).toBeInTheDocument(); // Inner class checking relies on knowing implementation details or using updated test logic.
        // Better: check if we can query by role checkbox? The component is a div, so role might be missing unless added.
        // Based on implementation reading: className has 'checked'.
        expect(container.firstElementChild?.className).toMatch(/checkboxContainer/);
        // We can't easily check internal state without querying specific classes if role isn't set.
    });

    it('respects disabled state', () => {
        const handleChange = vi.fn();
        render(<Checkbox checked={false} onChange={handleChange} disabled label="Disabled" />);

        const container = screen.getByText('Disabled').parentElement;
        if (container) {
            fireEvent.click(container);
            expect(handleChange).not.toHaveBeenCalled();
            expect(container.className).toMatch(/disabled/);
        }
    });
});
