import { default as React } from '../../../../node_modules/react';
export interface RadioProps {
    label?: string;
    checked: boolean;
    onChange: () => void;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    disabled?: boolean;
    value?: string;
}
export declare const Radio: React.FC<RadioProps>;
