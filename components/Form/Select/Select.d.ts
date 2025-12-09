import { default as React } from '../../../../node_modules/react';
export interface SelectOption {
    label: string;
    value: string;
}
export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    disabled?: boolean;
}
export declare const Select: React.FC<SelectProps>;
