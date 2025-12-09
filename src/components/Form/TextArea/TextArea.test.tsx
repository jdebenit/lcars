import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TextArea } from './TextArea';

describe('TextArea', () => {
    it('renders label', () => {
        render(<TextArea label="Comments" />);
        expect(screen.getByText('Comments')).toBeInTheDocument();
    });

    it('renders error message', () => {
        render(<TextArea error="Required field" />);
        expect(screen.getByText('Required field')).toBeInTheDocument();
    });

    it('accepts input', () => {
        render(<TextArea placeholder="Type here" />);
        const textarea = screen.getByPlaceholderText('Type here');

        fireEvent.change(textarea, { target: { value: 'Hello' } });

        expect(textarea).toHaveValue('Hello');
    });

    it('applies fullWidth class', () => {
        const { container } = render(<TextArea fullWidth />);
        expect(container.firstChild).toHaveClass(/fullWidth/);
    });
});
