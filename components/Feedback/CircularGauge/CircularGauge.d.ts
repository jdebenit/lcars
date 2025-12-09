import { default as React } from '../../../../node_modules/react';
export interface CircularGaugeProps {
    value: number;
    label?: string;
    size?: number;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow';
    className?: string;
}
export declare const CircularGauge: React.FC<CircularGaugeProps>;
