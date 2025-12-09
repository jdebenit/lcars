import { default as React } from '../../../../node_modules/react';
export interface ChartDataItem {
    label: string;
    value: number;
    color?: string;
    onClick?: () => void;
}
export interface ChartProps {
    data: ChartDataItem[];
    title: string;
    type?: 'bar' | 'donut' | 'horizontal';
    height?: number;
}
export declare const Chart: React.FC<ChartProps>;
