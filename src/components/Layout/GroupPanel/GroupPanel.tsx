import React from 'react';
import styles from './GroupPanel.module.css';

export interface GroupPanelProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
}

export const GroupPanel: React.FC<GroupPanelProps> = ({
    children,
    title = 'Monitoring Panel',
    subtitle,
    className = '',
}) => {
    return (
        <div className={`${styles.monitoringPanel} ${className}`}>
            {title && (
                <div className={styles.panelHeader}>
                    <div className={styles.headerBar}></div>
                    <h2 className={styles.panelTitle}>
                        {title}
                        {subtitle && (
                            <span style={{
                                fontSize: '0.75em',
                                opacity: 0.7,
                                marginLeft: '12px',
                                fontWeight: 'normal'
                            }}>
                                └─ {subtitle}
                            </span>
                        )}
                    </h2>
                </div>
            )}
            <div className={styles.panelContent}>
                {children}
            </div>
        </div>
    );
};



