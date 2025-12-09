import React from 'react';
import styles from './Loader.module.css';

export interface LoaderProps {
    /** Additional text to display */
    text?: string;
    /** Color of the scanning bars */
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    fullScreen?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({
    text = 'PROCESSING',
    color = 'blue',
    className = '',
    fullScreen = false
}) => {
    // 3 animated bars growing/shrinking
    return (
        <div className={`${styles.loaderContainer} ${fullScreen ? styles.fullScreen : ''} ${className}`}>
            <div className={`${styles.barContainer} ${styles[`color-${color}`]}`}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
            {text && <div className={`${styles.text} ${styles[`text-${color}`]}`}>{text}</div>}
        </div>
    );
};
