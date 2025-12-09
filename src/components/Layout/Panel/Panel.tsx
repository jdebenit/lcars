import React from 'react';
import styles from './Panel.module.css';

export interface PanelProps {
    children: React.ReactNode;
    title?: string;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
}

export const Panel: React.FC<PanelProps> = ({
    children,
    title,
    color = 'orange',
    className = '',
}) => {
    const panelClass = [
        styles.Panel,
        styles[`color-${color}`],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={panelClass}>
            {title && (
                <div className={styles.panelHeader}>
                    <div className={styles.headerBar}></div>
                    <h3 className={styles.panelTitle}>{title}</h3>
                </div>
            )}
            <div className={styles.panelContent}>{children}</div>
        </div>
    );
};



