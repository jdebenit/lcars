import React from 'react';
import { Panel } from '../../Layout/Panel/Panel';
import { StatusBar } from '../../Feedback/StatusBar/StatusBar';
import { StatusBadge } from '../../Feedback/StatusBadge/StatusBadge';
import { ValueLabel } from '../ValueLabel/ValueLabel';
import styles from './ServerStatusCard.module.css';

export interface ServerData {
    name: string;
    status: 'online' | 'warning' | 'error' | 'offline';
    cpu: number;
    memory: number;
    disk: number;
    uptime: string;
    ip?: string;
}

export interface ServerStatusCardProps {
    server: ServerData;
    className?: string;
}

export const ServerStatusCard: React.FC<ServerStatusCardProps> = ({
    server,
    className = '',
}) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'online':
                return 'blue';
            case 'warning':
                return 'yellow';
            case 'error':
                return 'red';
            case 'offline':
                return 'purple';
            default:
                return 'orange';
        }
    };

    const getMetricStatus = (value: number): 'online' | 'warning' | 'error' => {
        if (value >= 90) return 'error';
        if (value >= 75) return 'warning';
        return 'online';
    };

    return (
        <Panel
            title={server.name}
            color={getStatusColor(server.status)}
            className={`${styles.serverCard} ${className}`}
        >
            <div className={styles.serverInfo}>
                {server.ip && (
                    <ValueLabel label="IP" value={server.ip} className={styles.ipAddress} />
                )}
                <ValueLabel label="UPTIME" value={server.uptime} className={styles.uptime} />
            </div>

            <div className={styles.metrics}>
                <StatusBar
                    label="CPU"
                    value={`${server.cpu}%`}
                    status={getMetricStatus(server.cpu)}
                    showPulse={server.cpu >= 90}
                />
                <StatusBar
                    label="Memory"
                    value={`${server.memory}%`}
                    status={getMetricStatus(server.memory)}
                    showPulse={server.memory >= 90}
                />
                <StatusBar
                    label="Disk"
                    value={`${server.disk}%`}
                    status={getMetricStatus(server.disk)}
                    showPulse={server.disk >= 90}
                />
            </div>

            <div className={styles.statusFooter}>
                <StatusBadge status={server.status} />
            </div>
        </Panel>
    );
};

