import { default as React } from '../../../../node_modules/react';
export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'alert' | 'success' | 'warning' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
export declare const Button: React.FC<ButtonProps>;
