import { default as React } from '../../../../node_modules/react';
export interface LoaderProps {
    /** Additional text to display */
    text?: string;
    /** Color of the scanning bars */
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    fullScreen?: boolean;
}
export declare const Loader: React.FC<LoaderProps>;
