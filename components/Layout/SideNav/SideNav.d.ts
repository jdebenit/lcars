import { default as React } from '../../../../node_modules/react';
export interface SideNavItem {
    id: string;
    label: string;
    onClick?: () => void;
    active?: boolean;
}
export interface SideNavProps {
    items: SideNavItem[];
    title?: string;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    /** Width of the navigation column */
    width?: number;
    className?: string;
}
export declare const SideNav: React.FC<SideNavProps>;
