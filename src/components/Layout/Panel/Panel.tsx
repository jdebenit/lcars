import React from 'react';
import styles from './Panel.module.css';

export interface PanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
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
    ...props
}) => {
    const panelClass = [
        styles.Panel,
        styles[`color-${color}`],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={panelClass} {...props}>
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



