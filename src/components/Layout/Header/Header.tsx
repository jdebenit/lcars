import React from 'react';
import styles from './Header.module.css';

export interface HeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    rightContent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
    title,
    subtitle,
    className = '',
    rightContent,
}) => {
    return (
        <header className={`${styles.Header} ${className}`}>
            <div className={styles.headerTop}>
                <div className={styles.leftBar}></div>
                <div className={styles.centerSection}>
                    <h1 className={styles.title}>{title}</h1>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                <div className={styles.rightBars}>
                    {rightContent && <div className={styles.rightContent}>{rightContent}</div>}
                    <div className={styles.rightBar}></div>
                    <div className={styles.rightBar}></div>
                    <div className={styles.rightBar}></div>
                </div>
            </div>
            <div className={styles.headerBottom}>
                <div className={styles.bottomBar}></div>
            </div>
        </header>
    );
};



