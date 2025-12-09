import React from 'react';
import styles from './Frame.module.css';
import { Corner } from '../Corner/Corner';
import { Bar } from '../Bar/Bar';

export interface FrameProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
    children: React.ReactNode;
    title?: string;
    /** Color of the frame */
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    /** Width of the frame border (elbow thickness) */
    thickness?: number;
    className?: string;
}

export const Frame: React.FC<FrameProps> = ({
    children,
    title,
    color = 'tan',
    thickness = 20,
    className = '',
    ...props
}) => {
    return (
        <div className={`${styles.frameContainer} ${className}`} {...props}>
            {/* Top Bar Area */}
            <div className={styles.topRow}>
                <Corner
                    corner="top-left"
                    color={color}
                    width={100}
                    height={thickness + 30} // 30px overlap down?
                    thickness={thickness}
                />
                <div className={styles.topBarSpacer}>
                    <Bar color={color} rounded="right" className={styles.topBar}>
                        {title && <span className={styles.titleText}>{title}</span>}
                    </Bar>
                </div>
            </div>

            {/* Content Area */}
            <div className={styles.contentRow}>
                <div className={styles.leftBarSpacer} style={{ width: thickness }}>
                    <div className={`${styles.leftBar} ${styles[`bg-${color}`]}`}></div>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>

            {/* Bottom Bar Area (Bracket close) */}
            <div className={styles.bottomRow}>
                <div className={styles.bottomLeftCap}>
                    <Bar color={color} rounded="left" className={styles.cap} />
                </div>
                <div className={styles.bottomBarSpacer}>
                    <Bar color={color} className={styles.fillBar} />
                </div>
                <Corner
                    corner="bottom-right"
                    color={color}
                    width={100}
                    height={thickness + 20}
                    thickness={thickness}
                />
            </div>
        </div>
    );
};
