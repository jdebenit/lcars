import React from 'react';
import { PodCard, PodData } from '../PodCard/PodCard';
import styles from './PodStatusGrid.module.css';

export type { PodData };

export interface PodStatusGridProps {
    pods: PodData[];
    className?: string;
}

export const PodStatusGrid: React.FC<PodStatusGridProps> = ({
    pods,
    className = '',
}) => {
    return (
        <div className={`${styles.podGrid} ${className}`}>
            {pods.map((pod, index) => (
                <PodCard key={index} pod={pod} />
            ))}
        </div>
    );
};

