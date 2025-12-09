import React from 'react';
import styles from './ValueLabel.module.css';

export interface ValueLabelProps {
    label: string;
    value: string | number;
    color?: string;
    className?: string;
}

export const ValueLabel: React.FC<ValueLabelProps> = ({
    label,
    value,
    color,
    className = ''
}) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <span className={styles.label} style={color ? { color } : undefined}>{label}:</span>
            <span className={styles.value}>{value}</span>
        </div>
    );
};



