import { default as React } from '../../../../node_modules/react';
export interface ToggleProps {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow';
    disabled?: boolean;
    className?: string;
}
export declare const Toggle: React.FC<ToggleProps>;
