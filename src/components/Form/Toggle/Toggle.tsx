import React from 'react';
import styles from './Toggle.module.css';

export interface ToggleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow';
    disabled?: boolean;
    className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
    label,
    checked,
    onChange,
    color = 'orange',
    disabled = false,
    className = '',
    ...props
}) => {
    const toggleClass = [
        styles.toggleContainer,
        disabled ? styles.disabled : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const handleToggle = (e: React.MouseEvent) => {
        if (!disabled) {
            onChange(!checked);
        }
        if (props.onClick) props.onClick(e as any);
    };

    return (
        <div className={toggleClass} onClick={handleToggle} {...props}>
            <div className={`${styles.switch} ${checked ? styles.checked : ''} ${styles[`color-${color}`]}`}>
                <div className={styles.indicator}></div>
                <div className={styles.statusText}>{checked ? 'ON' : 'OFF'}</div>
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </div>
    );
};



