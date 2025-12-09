import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DataGrid, GridColumn } from './DataGrid';

describe('DataGrid', () => {
    const columns: GridColumn[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name' },
        { field: 'role', headerName: 'Role', align: 'right' }
    ];

    const rows = [
        { id: 1, name: 'Picard', role: 'Captain' },
        { id: 2, name: 'Riker', role: 'Commander' }
    ];

    it('renders headers correctly', () => {
        render(<DataGrid columns={columns} rows={rows} />);

        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Role')).toBeInTheDocument();
    });

    it('renders row data correctly', () => {
        render(<DataGrid columns={columns} rows={rows} />);

        expect(screen.getByText('Picard')).toBeInTheDocument();
        expect(screen.getByText('Captain')).toBeInTheDocument();
        expect(screen.getByText('Riker')).toBeInTheDocument();
        expect(screen.getByText('Commander')).toBeInTheDocument();
    });

    it('renders correct number of rows', () => {
        const { container } = render(<DataGrid columns={columns} rows={rows} />);
        // row class is used for each data row
        const renderedRows = container.getElementsByClassName('row');
        expect(renderedRows).toHaveLength(2);
    });

    it('applies custom className', () => {
        const { container } = render(<DataGrid columns={columns} rows={rows} className="custom-grid" />);
        expect(container.firstChild).toHaveClass('custom-grid');
    });
});
