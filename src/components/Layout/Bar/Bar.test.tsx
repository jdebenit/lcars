import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Bar } from './Bar';

describe('Bar', () => {
    it('renders children', () => {
        render(<Bar>Content</Bar>);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('applies color class', () => {
        const { container } = render(<Bar color="red" />);
        expect(container.firstChild).toHaveClass(/color-red/);
    });

    it('applies rounded class', () => {
        const { container } = render(<Bar rounded="left" />);
        expect(container.firstChild).toHaveClass(/rounded-left/);
    });

    it('handles click event', () => {
        const handleClick = vi.fn();
        render(<Bar onClick={handleClick}>Clickable</Bar>);

        fireEvent.click(screen.getByText('Clickable'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
