import { default as React } from '../../../../node_modules/react';
export interface AlertProps {
    message: string;
    /** Type determines color: info=blue, warning=yellow, error=red */
    type?: 'info' | 'warning' | 'error' | 'success';
    /** If true, the alert pulses */
    flashing?: boolean;
    /** If provided, renders big title text */
    title?: string;
    onDismiss?: () => void;
    className?: string;
}
export declare const Alert: React.FC<AlertProps>;
