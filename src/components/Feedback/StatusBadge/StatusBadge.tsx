import React from 'react';
import styles from './StatusBadge.module.css';

export interface StatusBadgeProps {
    status: string;
    label?: string;
    className?: string;
    showPulse?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
    status,
    label,
    className = '',
    showPulse = false
}) => {
    const getStatusClass = (status: string) => {
        const lowerStatus = status.toLowerCase();
        switch (lowerStatus) {
            case 'online':
            case 'running':
                return styles.statusOnline;
            case 'warning':
            case 'pending':
                return styles.statusWarning;
            case 'error':
            case 'failed':
                return styles.statusError;
            case 'offline':
            case 'unknown':
                return styles.statusOffline;
            default:
                // Handle arbitrary colors if passed directly, otherwise default to offline/neutral
                if (['blue', 'green'].includes(lowerStatus)) return styles.statusOnline;
                if (['yellow', 'orange'].includes(lowerStatus)) return styles.statusWarning;
                if (['red'].includes(lowerStatus)) return styles.statusError;
                return styles.statusOffline;
        }
    };

    return (
        <div className={`${styles.statusBadge} ${getStatusClass(status)} ${className}`}>
            {showPulse && <span className={styles.pulse}></span>}
            {label || status.toUpperCase()}
        </div>
    );
};



