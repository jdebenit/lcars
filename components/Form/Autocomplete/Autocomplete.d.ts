import { default as React } from '../../../../node_modules/react';
import { InputProps } from '../Input/Input';
export interface AutocompleteSuggestion {
    value: string;
    label: string;
    type?: 'title' | 'url';
}
export interface AutocompleteProps extends Omit<InputProps, 'onChange' | 'onSelect'> {
    suggestions: AutocompleteSuggestion[];
    onSelect?: (suggestion: AutocompleteSuggestion) => void;
    onChange?: (value: string) => void;
    maxSuggestions?: number;
}
export declare const Autocomplete: React.FC<AutocompleteProps>;
