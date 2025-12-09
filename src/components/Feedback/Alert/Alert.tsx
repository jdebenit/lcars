import React, { useEffect, useState } from 'react';
import styles from './Alert.module.css';

export interface AlertProps {
    message: string;
    /** Type determines color: info=blue, warning=yellow, error=red */
    type?: 'info' | 'warning' | 'error' | 'success';
    /** If true, the alert pulses */
    flashing?: boolean;
    /** If provided, renders big title text */
    title?: string;
    onDismiss?: () => void;
    className?: string;
}

export const Alert: React.FC<AlertProps> = ({
    message,
    type = 'info',
    flashing = false,
    title,
    onDismiss,
    className = '',
}) => {
    // Map type to LCARS color
    const colorMap = {
        info: 'blue',
        warning: 'yellow',
        error: 'red',
        success: 'tan' // or a specific green if available
    };

    const color = colorMap[type] || 'blue';

    return (
        <div
            className={`${styles.alertContainer} ${styles[`color-${color}`]} ${flashing ? styles.flashing : ''} ${className}`}
            onClick={onDismiss}
            role="alert"
        >
            <div className={styles.bracketLeft}></div>
            <div className={styles.content}>
                {title && <h4 className={styles.title}>{title}</h4>}
                <p className={styles.message}>{message}</p>
            </div>
            <div className={styles.bracketRight}></div>
        </div>
    );
};
