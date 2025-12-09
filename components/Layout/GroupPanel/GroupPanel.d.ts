import { default as React } from '../../../../node_modules/react';
export interface GroupPanelProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
}
export declare const GroupPanel: React.FC<GroupPanelProps>;
