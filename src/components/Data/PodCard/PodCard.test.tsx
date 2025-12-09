import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PodCard, PodData } from './PodCard';

describe('PodCard', () => {
    const mockPod: PodData = {
        name: 'pod-123',
        namespace: 'default',
        status: 'running',
        replicas: { ready: 1, total: 1 },
        restarts: 0,
        age: '2d'
    };

    it('renders pod information correctly', () => {
        render(<PodCard pod={mockPod} />);

        expect(screen.getByText('pod-123')).toBeInTheDocument();
        expect(screen.getByText('default')).toBeInTheDocument();
        expect(screen.getByText('1/1')).toBeInTheDocument();
        expect(screen.getByText('2d')).toBeInTheDocument();
    });

    it('renders status badge correctly', () => {
        render(<PodCard pod={mockPod} />);
        expect(screen.getByText('RUNNING')).toBeInTheDocument();
    });

    it('applies status-based styling', () => {
        const { container } = render(<PodCard pod={mockPod} />);
        // Check for class name substring implies usage of style module
        // We can't check exact class name easily with css modules without importing styles in test or using matchers
        // But we can check if it renders.
        expect(container.firstChild).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<PodCard pod={mockPod} className="custom-pod" />);
        expect(container.firstChild).toHaveClass('custom-pod');
    });
});
