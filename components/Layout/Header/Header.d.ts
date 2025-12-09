import { default as React } from '../../../../node_modules/react';
export interface HeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    rightContent?: React.ReactNode;
}
export declare const Header: React.FC<HeaderProps>;
