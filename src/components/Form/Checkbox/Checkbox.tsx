import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked,
    onChange,
    color = 'yellow',
    className = '',
    disabled = false,
}) => {
    const handleClick = () => {
        if (!disabled) {
            onChange(!checked);
        }
    };

    return (
        <div
            className={`${styles.checkboxContainer} ${className} ${disabled ? styles.disabled : ''}`}
            onClick={handleClick}
        >
            <div className={`${styles.indicator} ${checked ? styles.checked : ''} ${styles[`color-${color}`]}`}>
                <div className={styles.innerLight}></div>
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </div>
    );
};
