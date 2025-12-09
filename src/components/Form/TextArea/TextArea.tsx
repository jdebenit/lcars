import React from 'react';
import styles from './TextArea.module.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({
    label,
    error,
    fullWidth = false,
    color = 'orange',
    className = '',
    ...props
}, ref) => {
    return (
        <div className={`${styles.fieldContainer} ${fullWidth ? styles.fullWidth : ''} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}

            <div className={`${styles.inputWrapper} ${styles[`color-${color}`]} ${error ? styles.error : ''}`}>
                {/* Decoration brackets */}
                <div className={styles.bracketLeft}></div>

                <textarea
                    ref={ref}
                    className={styles.textarea}
                    {...props}
                />

                <div className={styles.bracketRight}></div>
            </div>

            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
});

TextArea.displayName = 'TextArea';
