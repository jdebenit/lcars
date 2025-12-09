import { default as React } from '../../../../node_modules/react';
export interface PanelProps {
    children: React.ReactNode;
    title?: string;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
}
export declare const Panel: React.FC<PanelProps>;
