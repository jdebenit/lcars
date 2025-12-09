import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ServerStatusCard, ServerData } from './ServerStatusCard';

describe('ServerStatusCard', () => {
    const mockServer: ServerData = {
        name: 'Server A',
        status: 'online',
        cpu: 45,
        memory: 60,
        disk: 30,
        uptime: '10 days',
        ip: '192.168.1.1'
    };

    it('renders server info correctly', () => {
        render(<ServerStatusCard server={mockServer} />);

        expect(screen.getByText('Server A')).toBeInTheDocument();
        expect(screen.getByText('192.168.1.1')).toBeInTheDocument();
        expect(screen.getByText('10 days')).toBeInTheDocument();
    });

    it('renders metrics correctly', () => {
        render(<ServerStatusCard server={mockServer} />);

        expect(screen.getByText('45%')).toBeInTheDocument();
        expect(screen.getByText('60%')).toBeInTheDocument();
        expect(screen.getByText('30%')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<ServerStatusCard server={mockServer} className="custom-card" />);
        expect(container.firstChild).toHaveClass('custom-card');
    });
});
