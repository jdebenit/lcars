import React from 'react';
import { StatusBadge } from '../../Feedback/StatusBadge/StatusBadge';
import { ValueLabel } from '../ValueLabel/ValueLabel';
import styles from './PodCard.module.css';

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

export const PodCard: React.FC<PodCardProps> = ({
    pod,
    className = '',
}) => {
    const getStatusColorClass = (status: string) => {
        switch (status) {
            case 'running': return styles.borderRunning;
            case 'pending': return styles.borderPending;
            case 'failed': return styles.borderFailed;
            default: return styles.borderUnknown;
        }
    };

    return (
        <div className={`${styles.podCard} ${getStatusColorClass(pod.status)} ${className}`}>
            <div className={styles.podHeader}>
                <div className={styles.statusIndicator}></div>
                <div className={styles.podName}>{pod.name}</div>
            </div>

            <div className={styles.podDetails}>
                <div className={styles.detailRow}>
                    <ValueLabel label="Namespace" value={pod.namespace} />
                </div>

                <div className={styles.detailRow}>
                    <ValueLabel label="Replicas" value={`${pod.replicas.ready}/${pod.replicas.total}`} />
                </div>

                <div className={styles.detailRow}>
                    <ValueLabel label="Restarts" value={pod.restarts} />
                </div>

                <div className={styles.detailRow}>
                    <ValueLabel label="Age" value={pod.age} />
                </div>
            </div>

            <div className={styles.podFooter}>
                <StatusBadge status={pod.status} />
            </div>
        </div>
    );
};

