import React from 'react';
import { Panel } from '../../Layout/Panel/Panel';
import { StatusBar } from '../../Feedback/StatusBar/StatusBar';
import { StatusBadge } from '../../Feedback/StatusBadge/StatusBadge';
import { ValueLabel } from '../ValueLabel/ValueLabel';
import styles from './ApplicationMonitor.module.css';

export interface ApplicationData {
    name: string;
    version: string;
    status: 'online' | 'warning' | 'error' | 'offline';
    endpoints: {
        name: string;
        status: 'online' | 'warning' | 'error' | 'offline';
        responseTime?: number;
    }[];
    logs: {
        timestamp: string;
        level: 'info' | 'warning' | 'error';
        message: string;
    }[];
}

export interface ApplicationMonitorProps {
    application: ApplicationData;
    className?: string;
}

export const ApplicationMonitor: React.FC<ApplicationMonitorProps> = ({
    application,
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

    const getLogLevelClass = (level: string) => {
        switch (level) {
            case 'info':
                return styles.logInfo;
            case 'warning':
                return styles.logWarning;
            case 'error':
                return styles.logError;
            default:
                return styles.logInfo;
        }
    };

    return (
        <Panel
            title={application.name}
            color={getStatusColor(application.status)}
            className={`${styles.appMonitor} ${className}`}
        >
            <div className={styles.appHeader}>
                <div className={styles.versionBadge}>
                    <ValueLabel label="VERSION" value={application.version} />
                </div>
                <div className={styles.statusContainer}>
                    <StatusBadge status={application.status} />
                </div>
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Endpoints</h4>
                <div className={styles.endpoints}>
                    {application.endpoints.map((endpoint, index) => (
                        <div key={index} className={styles.endpointRow}>
                            <StatusBar
                                label={endpoint.name}
                                value={endpoint.responseTime ? `${endpoint.responseTime}ms` : undefined}
                                status={endpoint.status}
                                showPulse={endpoint.status === 'error'}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Recent Logs</h4>
                <div className={styles.logs}>
                    {application.logs.slice(0, 5).map((log, index) => (
                        <div key={index} className={`${styles.logEntry} ${getLogLevelClass(log.level)}`}>
                            <span className={styles.logTimestamp}>{log.timestamp}</span>
                            <span className={styles.logLevel}>[{log.level.toUpperCase()}]</span>
                            <span className={styles.logMessage}>{log.message}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Panel>
    );
};


