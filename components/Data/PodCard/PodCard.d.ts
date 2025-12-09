import { default as React } from '../../../../node_modules/react';
export interface PodData {
    name: string;
    namespace: string;
    status: 'running' | 'pending' | 'failed' | 'unknown';
    replicas: {
        ready: number;
        total: number;
    };
    restarts: number;
    age: string;
}
export interface PodCardProps {
    pod: PodData;
    className?: string;
}
export declare const PodCard: React.FC<PodCardProps>;
