import { default as React } from '../../../../node_modules/react';
export interface BarProps {
    children?: React.ReactNode;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    rounded?: 'none' | 'left' | 'right' | 'both' | 'top' | 'bottom';
    className?: string;
    style?: React.CSSProperties;
    /** Click handler */
    onClick?: () => void;
}
export declare const Bar: React.FC<BarProps>;
