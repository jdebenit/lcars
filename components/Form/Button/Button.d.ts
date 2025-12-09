import { default as React } from '../../../../node_modules/react';
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'alert' | 'success' | 'warning' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
}
export declare const Button: React.FC<ButtonProps>;
