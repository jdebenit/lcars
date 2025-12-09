import { default as React } from '../../../../node_modules/react';
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
export declare const ServerStatusCard: React.FC<ServerStatusCardProps>;
