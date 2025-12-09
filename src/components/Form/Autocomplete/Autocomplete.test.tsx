import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Autocomplete, AutocompleteSuggestion } from './Autocomplete';

describe('Autocomplete', () => {
    const suggestions: AutocompleteSuggestion[] = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
    ];

    it('renders input with value', () => {
        render(<Autocomplete suggestions={suggestions} value="test" onChange={() => { }} />);
        expect(screen.getByDisplayValue('test')).toBeInTheDocument();
    });

    it('shows suggestions on focus', () => {
        render(<Autocomplete suggestions={suggestions} value="a" onChange={() => { }} />);
        const input = screen.getByDisplayValue('a');

        fireEvent.focus(input);

        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
    });

    it('filters suggestions based on input', () => {
        render(<Autocomplete suggestions={suggestions} value="Ban" onChange={() => { }} />);
        const input = screen.getByDisplayValue('Ban');

        fireEvent.focus(input);

        expect(screen.queryByText('Apple')).not.toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
    });

    it('handles suggestion selection', () => {
        const handleSelect = vi.fn();
        const handleChange = vi.fn();

        render(<Autocomplete
            suggestions={suggestions}
            value="a"
            onSelect={handleSelect}
            onChange={handleChange}
        />);

        const input = screen.getByDisplayValue('a');
        fireEvent.focus(input);

        fireEvent.click(screen.getByText('Apple'));

        expect(handleChange).toHaveBeenCalledWith('apple');
        expect(handleSelect).toHaveBeenCalledWith(suggestions[0]);
    });
});
