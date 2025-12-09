import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'alert' | 'success' | 'warning' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    className = '',
}) => {
    const buttonClass = [
        styles.Button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        disabled ? styles.disabled : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            type="button"
        >
            <span className={styles.buttonContent}>{children}</span>
        </button>
    );
};



