import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from './DataGrid';

const meta = {
    title: 'Data/DataGrid',
    component: DataGrid,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
        headerColor: {
            control: { type: 'select' },
            options: ['orange', 'blue', 'purple', 'red', 'yellow', 'tan'],
        },
    },
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'system', headerName: 'SYSTEM', width: 150 },
    { field: 'status', headerName: 'STATUS', width: 120 },
    { field: 'energy', headerName: 'ENERGY OUTPUT', align: 'right' as const },
];

const rows = [
    { id: '001', system: 'WARP CORE', status: 'ONLINE', energy: '98%' },
    { id: '002', system: 'PHASERS', status: 'STANDBY', energy: '45%' },
    { id: '003', system: 'SHIELDS', status: 'ONLINE', energy: '100%' },
    { id: '004', system: 'LRS', status: 'SCANNING', energy: '12%' },
    { id: '005', system: 'IMPULSE', status: 'OFFLINE', energy: '0%' },
    { id: '006', system: 'LIFE SUPPORT', status: 'ONLINE', energy: '99%' },
    { id: '007', system: 'TRANSPORTER', status: 'STANDBY', energy: '5%' },
    { id: '008', system: 'REPLICATOR', status: 'ONLINE', energy: '15%' },
];

export const Sensors: Story = {
    args: {
        columns: columns,
        rows: rows,
        color: 'tan',
        headerColor: 'orange',
        height: '300px',
    },
};

export const Inventory: Story = {
    args: {
        columns: [
            { field: 'item', headerName: 'ITEM NAME' },
            { field: 'qty', headerName: 'QUANTITY', width: 100, align: 'right' },
            { field: 'location', headerName: 'LOCATION', width: 150 },
        ],
        rows: [
            { item: 'SELF-SEALING STEM BOLTS', qty: 100, location: 'CARGO BAY 1' },
            { item: 'YAMOK SAUCE', qty: 50, location: 'PROMENADE' },
            { item: 'PHASER RIFLES', qty: 12, location: 'ARMORY' },
            { item: 'TRICORDERS', qty: 25, location: 'LAB 3' },
        ],
        color: 'blue',
        headerColor: 'blue',
    },
};

export const WideTable: Story = {
    render: (args) => (
        <div style={{ width: '600px', border: '1px solid #444' }}>
            <DataGrid {...args} />
        </div>
    ),
    args: {
        headerColor: 'purple',
        color: 'purple',
        height: '300px',
        columns: [
            { field: 'id', headerName: 'ID', width: 80 },
            { field: 'c1', headerName: 'COLUMN 1', width: 150 },
            { field: 'c2', headerName: 'COLUMN 2', width: 150 },
            { field: 'c3', headerName: 'COLUMN 3', width: 150 },
            { field: 'c4', headerName: 'COLUMN 4', width: 150 },
            { field: 'c5', headerName: 'COLUMN 5', width: 150 },
            { field: 'c6', headerName: 'COLUMN 6', width: 150 },
            { field: 'c7', headerName: 'COLUMN 7', width: 150 },
            { field: 'c8', headerName: 'COLUMN 8', width: 150 },
        ],
        rows: Array.from({ length: 10 }).map((_, i) => ({
            id: `R-${i}`,
            c1: `Data 1-${i}`,
            c2: `Data 2-${i}`,
            c3: `Data 3-${i}`,
            c4: `Data 4-${i}`,
            c5: `Data 5-${i}`,
            c6: `Data 6-${i}`,
            c7: `Data 7-${i}`,
            c8: `Data 8-${i}`,
        })),
    },
};
