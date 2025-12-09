import { default as React } from '../../../../node_modules/react';
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
export declare const ApplicationMonitor: React.FC<ApplicationMonitorProps>;
