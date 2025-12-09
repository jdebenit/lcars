import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Chart, ChartDataItem } from './Chart';

describe('Chart', () => {
    const mockData: ChartDataItem[] = [
        { label: 'Item 1', value: 10 },
        { label: 'Item 2', value: 20 },
        { label: 'Item 3', value: 30 }
    ];

    it('renders title correctly', () => {
        render(<Chart data={mockData} title="Test Chart" />);
        expect(screen.getByText('Test Chart')).toBeInTheDocument();
    });

    it('renders items in bar chart (default)', () => {
        render(<Chart data={mockData} title="Bar Chart" />);

        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
    });

    it('renders items in donut chart', () => {
        render(<Chart data={mockData} title="Donut Chart" type="donut" />);

        expect(screen.getByText('Donut Chart')).toBeInTheDocument();
        expect(screen.getByText('Total')).toBeInTheDocument();
        expect(screen.getByText('60')).toBeInTheDocument(); // Sum of values

        // Legends
        expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    it('renders items in horizontal chart', () => {
        render(<Chart data={mockData} title="Horizontal Chart" type="horizontal" />);

        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
    });

    it('handles click events on items', () => {
        const handleClick = vi.fn();
        const dataWithClick = [
            { label: 'Clickable', value: 50, onClick: handleClick }
        ];

        render(<Chart data={dataWithClick} title="Interactive Chart" />);

        const bar = screen.getByText('50').parentElement;
        if (bar) {
            fireEvent.click(bar);
            expect(handleClick).toHaveBeenCalledTimes(1);
        }
    });
});
