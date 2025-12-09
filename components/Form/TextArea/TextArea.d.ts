import { default as React } from '../../../../node_modules/react';
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
