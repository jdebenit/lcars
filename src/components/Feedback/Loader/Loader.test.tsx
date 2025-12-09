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
        expect(container.querySelector('[class*="bar1"]')).toBeInTheDocument();
        expect(container.querySelector('[class*="bar2"]')).toBeInTheDocument();
        expect(container.querySelector('[class*="bar3"]')).toBeInTheDocument();
    });

    it('applies fullscreen class', () => {
        const { container } = render(<Loader fullScreen />);
        expect(container.firstChild).toHaveClass(/fullScreen/);
    });
});
