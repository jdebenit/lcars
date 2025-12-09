import { default as React } from '../../../../node_modules/react';
export interface CornerProps {
    /** Corner color */
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan' | 'white' | 'gray';
    /** Corner orientation */
    corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    /** Width of the vertical leg in pixels */
    width?: number;
    /** Height of the horizontal leg in pixels */
    height?: number;
    /** Thickness of the bar itself */
    thickness?: number;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Corner: React.FC<CornerProps>;
