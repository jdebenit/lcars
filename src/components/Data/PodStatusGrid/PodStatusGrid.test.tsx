import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PodStatusGrid, PodData } from './PodStatusGrid';

describe('PodStatusGrid', () => {
    const mockPods: PodData[] = [
        { name: 'pod-1', namespace: 'ns1', status: 'running', replicas: { ready: 1, total: 1 }, restarts: 0, age: '1d' },
        { name: 'pod-2', namespace: 'ns2', status: 'failed', replicas: { ready: 0, total: 1 }, restarts: 5, age: '2h' }
    ];

    it('renders all pods', () => {
        render(<PodStatusGrid pods={mockPods} />);

        expect(screen.getByText('pod-1')).toBeInTheDocument();
        expect(screen.getByText('pod-2')).toBeInTheDocument();
        expect(screen.getByText('ns1')).toBeInTheDocument();
        expect(screen.getByText('ns2')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<PodStatusGrid pods={mockPods} className="custom-grid" />);
        expect(container.firstChild).toHaveClass('custom-grid');
    });
});
