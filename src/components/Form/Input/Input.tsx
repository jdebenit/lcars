import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    fullWidth = false,
    className = '',
    disabled,
    ...props
}, ref) => {
    const containerClass = [
        styles.inputContainer,
        fullWidth ? styles.fullWidth : '',
        disabled ? styles.disabled : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={containerClass}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputWrapper}>
                <div className={styles.prefixDecoration}></div>
                <input
                    ref={ref}
                    className={`${styles.input} ${error ? styles.hasError : ''}`}
                    disabled={disabled}
                    {...props}
                />
                <div className={styles.suffixDecoration}></div>
            </div>
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
});

Input.displayName = 'Input';



