import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ValueLabel } from './ValueLabel';

describe('ValueLabel', () => {
    it('renders label and value', () => {
        render(<ValueLabel label="Status" value="OK" />);
        expect(screen.getByText('Status:')).toBeInTheDocument();
        expect(screen.getByText('OK')).toBeInTheDocument();
    });

    it('applies custom color to label', () => {
        render(<ValueLabel label="Status" value="OK" color="red" />);
        const label = screen.getByText('Status:');
        expect(label).toHaveStyle({ color: 'rgb(255, 0, 0)' }); // jest-dom handles color normalization
    });

    it('applies custom className', () => {
        const { container } = render(<ValueLabel label="Status" value="OK" className="custom-vl" />);
        expect(container.firstChild).toHaveClass('custom-vl');
    });
});
