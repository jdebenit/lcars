import { default as React } from '../../../../node_modules/react';
export interface GridColumn {
    field: string;
    headerName: string;
    width?: number | string;
    align?: 'left' | 'center' | 'right';
}
export interface DataGridProps {
    columns: GridColumn[];
    rows: any[];
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    headerColor?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    height?: number | string;
}
export declare const DataGrid: React.FC<DataGridProps>;
