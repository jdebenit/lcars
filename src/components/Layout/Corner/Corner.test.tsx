import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Corner } from './Corner';

describe('Corner', () => {
    it('renders correctly', () => {
        const { container } = render(<Corner />);
        expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('applies color class', () => {
        const { container } = render(<Corner color="red" />);
        expect(container.firstChild).toHaveClass(/color-red/);
    });

    it('applies width and height styles', () => {
        const { container } = render(<Corner width={200} height={100} />);
        expect(container.firstChild).toHaveStyle({ width: '200px', height: '100px' });
    });

    it('renders with correct orientation transform', () => {
        const { container } = render(<Corner corner="top-right" />);
        const svg = container.querySelector('svg');
        // Check for style transform rather than attribute, as implementation uses style prop on SVG
        expect(svg).toHaveStyle({ transform: 'scale(-1, 1)' });
    });
});
