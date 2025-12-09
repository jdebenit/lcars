import { default as React } from '../../../../node_modules/react';
export interface StatusBadgeProps {
    status: string;
    label?: string;
    className?: string;
    showPulse?: boolean;
}
export declare const StatusBadge: React.FC<StatusBadgeProps>;
