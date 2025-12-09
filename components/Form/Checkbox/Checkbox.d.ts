import { default as React } from '../../../../node_modules/react';
export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    disabled?: boolean;
}
export declare const Checkbox: React.FC<CheckboxProps>;
