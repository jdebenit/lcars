import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ApplicationMonitor, ApplicationData } from './ApplicationMonitor';

describe('ApplicationMonitor', () => {
    const mockData: ApplicationData = {
        name: 'Test App',
        version: '1.0.0',
        status: 'online',
        endpoints: [
            { name: 'API', status: 'online', responseTime: 50 },
            { name: 'DB', status: 'warning', responseTime: 150 }
        ],
        logs: [
            { timestamp: '10:00', level: 'info', message: 'System started' },
            { timestamp: '10:05', level: 'error', message: 'Connection failed' }
        ]
    };

    it('renders application info correctly', () => {
        render(<ApplicationMonitor application={mockData} />);

        expect(screen.getByText('Test App')).toBeInTheDocument();
        expect(screen.getByText('1.0.0')).toBeInTheDocument();
        expect(screen.getByText('VERSION')).toBeInTheDocument();
    });

    it('renders endpoints correctly', () => {
        render(<ApplicationMonitor application={mockData} />);

        expect(screen.getByText('API')).toBeInTheDocument();
        expect(screen.getByText('50ms')).toBeInTheDocument();
        expect(screen.getByText('DB')).toBeInTheDocument();
        expect(screen.getByText('150ms')).toBeInTheDocument();
    });

    it('renders logs correctly', () => {
        render(<ApplicationMonitor application={mockData} />);

        expect(screen.getByText('System started')).toBeInTheDocument();
        expect(screen.getByText('Connection failed')).toBeInTheDocument();
        expect(screen.getByText('[INFO]')).toBeInTheDocument();
        expect(screen.getByText('[ERROR]')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<ApplicationMonitor application={mockData} className="custom-class" />);
        expect(container.firstChild).toHaveClass('custom-class');
    });
});
