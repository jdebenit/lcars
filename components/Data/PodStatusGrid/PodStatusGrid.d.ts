import { default as React } from '../../../../node_modules/react';
import { PodData } from '../PodCard/PodCard';
export type { PodData };
export interface PodStatusGridProps {
    pods: PodData[];
    className?: string;
}
export declare const PodStatusGrid: React.FC<PodStatusGridProps>;
