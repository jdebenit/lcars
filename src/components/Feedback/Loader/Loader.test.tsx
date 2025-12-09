import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Loader } from './Loader';

describe('Loader', () => {
    it('renders default text', () => {
        render(<Loader />);
        expect(screen.getByText('PROCESSING')).toBeInTheDocument();
    });

    it('renders custom text', () => {
        render(<Loader text="LOADING" />);
        expect(screen.getByText('LOADING')).toBeInTheDocument();
    });

    it('renders animation bars', () => {
        const { container } = render(<Loader />);
        // barContainer + 3 bars
        expect(container.querySelectorAll('div > div')).toHaveLength(5); // container, barContainer, bar1, bar2, bar3 - approx check
    });

    it('applies fullscreen class', () => {
        const { container } = render(<Loader fullScreen />);
        expect(container.firstChild).toHaveClass(/fullScreen/);
    });
});
