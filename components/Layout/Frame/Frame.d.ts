import { default as React } from '../../../../node_modules/react';
export interface FrameProps {
    children: React.ReactNode;
    title?: string;
    /** Color of the frame */
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    /** Width of the frame border (elbow thickness) */
    thickness?: number;
    className?: string;
}
export declare const Frame: React.FC<FrameProps>;
