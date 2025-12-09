import React from 'react';
import styles from './StatusBar.module.css';

export interface StatusBarProps {
    label: string;
    value?: string | number;
    status: 'online' | 'warning' | 'error' | 'offline';
    showPulse?: boolean;
    className?: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({
    label,
    value,
    status,
    showPulse = false,
    className = '',
}) => {
    const barClass = [
        styles.statusBar,
        styles[`status-${status}`],
        showPulse ? styles.pulse : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={barClass}>
            <div className={styles.statusIndicator}></div>
            <div className={styles.statusContent}>
                <span className={styles.statusLabel}>{label}</span>
                {value !== undefined && (
                    <span className={styles.statusValue}>{value}</span>
                )}
            </div>
        </div>
    );
};



