import React from 'react';
import styles from './Bar.module.css';

export interface BarProps {
    children?: React.ReactNode;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    rounded?: 'none' | 'left' | 'right' | 'both' | 'top' | 'bottom';
    className?: string;
    style?: React.CSSProperties;
    /** Click handler */
    onClick?: () => void;
}

export const Bar: React.FC<BarProps> = ({
    color = 'blue',
    rounded = 'none',
    className = '',
    children,
    onClick,
}) => {
    // Helper to get color class
    const getColorClass = (c: string) => styles[`color-${c}`] || '';

    // Helper to get rounded class
    const getRoundClass = (r: string) => styles[`rounded-${r}`] || '';

    const rootClasses = [
        styles.bar,
        getColorClass(color),
        getRoundClass(rounded),
        className,
        onClick ? styles.clickable : '',
    ].filter(Boolean).join(' ');

    return (
        <div className={rootClasses} onClick={onClick}>
            {children && <span className={styles.content}>{children}</span>}
        </div>
    );
};
