import { default as React } from '../../../../node_modules/react';
export interface StatusBarProps {
    label: string;
    value?: string | number;
    status: 'online' | 'warning' | 'error' | 'offline';
    showPulse?: boolean;
    className?: string;
}
export declare const StatusBar: React.FC<StatusBarProps>;
