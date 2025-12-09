import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Toggle } from './Toggle';

describe('Toggle', () => {
    it('renders correctly with label', () => {
        render(<Toggle checked={false} onChange={() => { }} label="Power" />);
        expect(screen.getByText('Power')).toBeInTheDocument();
        expect(screen.getByText('OFF')).toBeInTheDocument();
    });

    it('toggles state on click', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(<Toggle checked={false} onChange={handleChange} />);

        await user.click(screen.getByText('OFF'));
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('displays ON when checked', () => {
        render(<Toggle checked={true} onChange={() => { }} />);
        expect(screen.getByText('ON')).toBeInTheDocument();
    });

    it('does not toggle when disabled', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(<Toggle checked={false} onChange={handleChange} disabled />);

        await user.click(screen.getByText('OFF'));
        expect(handleChange).not.toHaveBeenCalled();
    });

    it('applies color class', () => {
        const { container } = render(<Toggle checked={false} onChange={() => { }} color="red" />);
        // Check for color class presence using regex
        const switchElement = container.querySelector('div[class*="_switch_"]');
        expect(switchElement?.className).toMatch(/_color-red_.+/);
    });
});

