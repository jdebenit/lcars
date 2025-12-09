import { default as React } from '../../../../node_modules/react';
export interface CheckboxProps {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    disabled?: boolean;
}
export declare const Checkbox: React.FC<CheckboxProps>;
