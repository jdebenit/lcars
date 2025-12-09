import React from 'react';
import styles from './CircularGauge.module.css';

export interface CircularGaugeProps {
    value: number; // 0 to 100
    label?: string;
    size?: number;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow';
    className?: string;
}

export const CircularGauge: React.FC<CircularGaugeProps> = ({
    value,
    label,
    size = 120,
    color = 'orange',
    className = '',
}) => {
    // Ensure value is between 0 and 100
    const normalizedValue = Math.min(100, Math.max(0, value));

    // SVG configuration
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (normalizedValue / 100) * circumference;

    const containerStyle = {
        width: size,
        height: size,
    } as React.CSSProperties;

    return (
        <div className={`${styles.gaugeContainer} ${className}`} style={containerStyle}>
            <svg
                className={styles.svg}
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                {/* Background Circle */}
                <circle
                    className={styles.bgCircle}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                {/* Progress Circle */}
                <circle
                    className={`${styles.progressCircle} ${styles[`color-${color}`]}`}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
            <div className={styles.content}>
                <span className={`${styles.valueText} ${styles[`color-${color}`]}`}>
                    {Math.round(normalizedValue)}%
                </span>
                {label && <span className={styles.labelText}>{label}</span>}
            </div>
        </div>
    );
};



