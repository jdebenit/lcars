import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
    it('renders correctly with label', () => {
        render(<Input label="Username" />);
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('handles user input', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} />);

        const input = screen.getByRole('textbox');
        await user.type(input, 'Jean-Luc');

        expect(input).toHaveValue('Jean-Luc');
        expect(handleChange).toHaveBeenCalled();
    });

    it('renders in disabled state', () => {
        render(<Input disabled />);
        const input = screen.getByRole('textbox');
        expect(input).toBeDisabled();
        // Check if the container has the disabled class (implementation detail, but useful for visual regression)
        // We can check if the parent div has the class, but testing behavior (disabled attribute) is better.
    });

    it('displays error message', () => {
        render(<Input error="Invalid input" />);
        expect(screen.getByText('Invalid input')).toBeInTheDocument();
        const input = screen.getByRole('textbox');
        expect(input.className).toMatch(/_hasError_.+/);
    });

    it('applies fullWidth style', () => {
        const { container } = render(<Input fullWidth />);
        // Check if the container has the fullWidth class
        expect((container.firstChild as HTMLElement).className).toMatch(/_fullWidth_.+/);
    });
});

