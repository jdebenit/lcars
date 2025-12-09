import React from 'react';
import styles from './DataGrid.module.css';

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

export const DataGrid: React.FC<DataGridProps> = ({
    columns,
    rows,
    color = 'tan',
    className = '',
    headerColor = 'orange',
    height = '400px',
}) => {
    return (
        <div className={`${styles.gridContainer} ${className}`} style={{ height }}>
            {/* Scroll Wrapper handles both X and Y scrolling for content */}
            <div className={styles.scrollWrapper}>
                {/* Header */}
                <div className={styles.headerRow}>
                    {columns.map((col) => (
                        <div
                            key={col.field}
                            className={`${styles.headerCell} ${styles[`color-${headerColor}`]}`}
                            style={{ width: col.width, flex: col.width ? 'none' : 1, textAlign: col.align || 'left' }}
                        >
                            {col.headerName}
                        </div>
                    ))}
                </div>

                {/* Body Content */}
                <div className={styles.bodyWrapper}>
                    <div className={`${styles.sideBar} ${styles[`bg-${color}`]}`}></div>
                    <div className={styles.rowsContainer}>
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className={styles.row}>
                                {columns.map((col) => (
                                    <div
                                        key={`${rowIndex}-${col.field}`}
                                        className={styles.cell}
                                        style={{ width: col.width, flex: col.width ? 'none' : 1, textAlign: col.align || 'left' }}
                                    >
                                        {row[col.field]}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bar */}
            <div className={`${styles.footerBar} ${styles[`bg-${color}`]}`}></div>
        </div>
    );
};
