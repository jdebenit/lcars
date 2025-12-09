import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Select, SelectOption } from './Select';

describe('Select', () => {
    const options: SelectOption[] = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' }
    ];

    it('renders placeholder by default', () => {
        render(<Select options={options} />);
        expect(screen.getByText('SELECT')).toBeInTheDocument();
    });

    it('renders selected label', () => {
        render(<Select options={options} value="a" />);
        expect(screen.getByText('Option A')).toBeInTheDocument();
    });

    it('opens dropdown on click', () => {
        render(<Select options={options} />);

        fireEvent.click(screen.getByText('SELECT'));

        expect(screen.getByText('Option A')).toBeInTheDocument();
        expect(screen.getByText('Option B')).toBeInTheDocument();
    });

    it('calls onChange when option selected', () => {
        const handleChange = vi.fn();
        render(<Select options={options} onChange={handleChange} />);

        fireEvent.click(screen.getByText('SELECT'));
        fireEvent.click(screen.getByText('Option B'));

        expect(handleChange).toHaveBeenCalledWith('b');
    });

    it('closes dropdown when option selected', () => {
        render(<Select options={options} />);

        // Open
        fireEvent.click(screen.getByText('SELECT'));
        expect(screen.getByText('Option A')).toBeInTheDocument();

        // Select
        fireEvent.click(screen.getByText('Option A'));

        // Should be closed (queryByText returns null if not found)
        // Note: Option A is also the selected label, so it might still be present. 
        // We should check if the dropdown list container is gone.
        // But since we selected 'a', the main display text becomes 'Option A'.
        // Let's check if 'Option B' is gone.
        expect(screen.queryByText('Option B')).not.toBeInTheDocument();
    });
});
