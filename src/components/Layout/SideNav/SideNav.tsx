import React from 'react';
import styles from './SideNav.module.css';
import { Corner } from '../Corner/Corner';
import { Bar } from '../Bar/Bar';

export interface SideNavItem {
    id: string;
    label: string;
    onClick?: () => void;
    active?: boolean;
}

export interface SideNavProps {
    items: SideNavItem[];
    title?: string;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    /** Width of the navigation column */
    width?: number;
    className?: string;
}

export const SideNav: React.FC<SideNavProps> = ({
    items,
    title = 'NAVIGATION',
    color = 'blue',
    width = 190,
    className = '',
}) => {
    return (
        <nav className={`${styles.sideNav} ${className}`} style={{ width }}>
            {/* Header Elbow */}
            <div className={styles.header}>
                <Corner
                    corner="top-right"
                    color={color}
                    width={width}
                    height={60}
                    thickness={30}
                />
                <span className={styles.headerTitle}>{title}</span>
            </div>

            {/* Navigation Items (Buttons) */}
            <div className={styles.navItems}>
                {items.map(item => (
                    <div key={item.id} className={styles.navItemWrapper}>
                        <Bar
                            color={item.active ? 'orange' : color}
                            rounded="both"
                            className={`${styles.navItem} ${item.active ? styles.active : ''}`}
                            onClick={item.onClick}
                        >
                            {item.label}
                        </Bar>
                    </div>
                ))}
            </div>

            {/* Footer / Filler */}
            <div className={styles.footer}>
                <Bar color={color} rounded="bottom" className={styles.filler} />
            </div>
        </nav>
    );
};
