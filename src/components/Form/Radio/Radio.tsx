import React from 'react';
import styles from './Radio.module.css';

export interface RadioProps {
    label?: string;
    checked: boolean;
    onChange: () => void;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    disabled?: boolean;
    value?: string;
}

export const Radio: React.FC<RadioProps> = ({
    label,
    checked,
    onChange,
    color = 'orange',
    className = '',
    disabled = false,
    value,
}) => {
    // Helper to get color class - standard "lit" indicator
    const getColorClass = (c: string) => styles[`color-${c}`] || '';

    return (
        <div
            className={`${styles.radioContainer} ${disabled ? styles.disabled : ''} ${className}`}
            onClick={() => !disabled && onChange()}
        >
            <div className={`${styles.indicator} ${checked ? styles.checked : ''} ${checked ? getColorClass(color) : ''}`}>
                <div className={styles.indicatorLight}></div>
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </div>
    );
};
