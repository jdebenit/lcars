import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CircularGauge } from './CircularGauge';

describe('CircularGauge', () => {
    it('renders value correctly', () => {
        render(<CircularGauge value={75} />);
        expect(screen.getByText('75%')).toBeInTheDocument();
    });

    it('renders label correctly', () => {
        render(<CircularGauge value={50} label="CPU Load" />);
        expect(screen.getByText('CPU Load')).toBeInTheDocument();
    });

    it('clamps value between 0 and 100', () => {
        render(<CircularGauge value={150} />);
        expect(screen.getByText('100%')).toBeInTheDocument();

        render(<CircularGauge value={-20} />);
        expect(screen.getByText('0%')).toBeInTheDocument();
    });

    it('renders SVG elements', () => {
        const { container } = render(<CircularGauge value={50} />);
        expect(container.querySelector('svg')).toBeInTheDocument();
        expect(container.querySelectorAll('circle')).toHaveLength(2);
    });
});
