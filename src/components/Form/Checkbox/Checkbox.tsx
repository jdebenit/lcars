import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
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
    ...props
}) => {
    const handleClick = (e: React.MouseEvent) => {
        if (!disabled) {
            onChange(!checked);
        }
        if (props.onClick) {
            props.onClick(e as any);
        }
    };

    return (
        <div
            className={`${styles.checkboxContainer} ${className} ${disabled ? styles.disabled : ''}`}
            onClick={handleClick}
            {...props}
        >
            <div className={`${styles.indicator} ${checked ? styles.checked : ''} ${styles[`color-${color}`]}`}>
                <div className={styles.innerLight}></div>
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </div>
    );
};
