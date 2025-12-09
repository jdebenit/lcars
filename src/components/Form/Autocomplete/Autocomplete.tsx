import React, { useState, useRef, useEffect } from 'react';
import { Input, type InputProps } from '../Input/Input';
import styles from './Autocomplete.module.css';

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

export const Autocomplete: React.FC<AutocompleteProps> = ({
    suggestions,
    onSelect,
    onChange,
    maxSuggestions = 10,
    value = '',
    ...inputProps
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Filter suggestions based on input value
    const filteredSuggestions = suggestions
        .filter(suggestion =>
            suggestion.label.toLowerCase().includes(String(value).toLowerCase())
        )
        .slice(0, maxSuggestions);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSelectedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Reset selected index when suggestions change
    useEffect(() => {
        setSelectedIndex(-1);
    }, [filteredSuggestions.length]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange?.(newValue);
        setIsOpen(newValue.length > 0);
        setSelectedIndex(-1);
    };

    const handleSuggestionClick = (suggestion: AutocompleteSuggestion) => {
        onChange?.(suggestion.value);
        onSelect?.(suggestion);
        setIsOpen(false);
        setSelectedIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen || filteredSuggestions.length === 0) {
            if (e.key === 'ArrowDown' && String(value).length > 0) {
                setIsOpen(true);
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < filteredSuggestions.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < filteredSuggestions.length) {
                    handleSuggestionClick(filteredSuggestions[selectedIndex]);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setIsOpen(false);
                setSelectedIndex(-1);
                break;
        }
    };

    const handleFocus = () => {
        if (String(value).length > 0) {
            setIsOpen(true);
        }
    };

    return (
        <div ref={containerRef} className={styles.autocompleteContainer}>
            <Input
                {...inputProps}
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                ref={inputRef as any}
            />
            {isOpen && filteredSuggestions.length > 0 && (
                <div className={styles.dropdown}>
                    <ul className={styles.suggestionList}>
                        {filteredSuggestions.map((suggestion, index) => (
                            <li
                                key={`${suggestion.value}-${index}`}
                                className={`${styles.suggestionItem} ${index === selectedIndex ? styles.selected : ''
                                    }`}
                                onClick={() => handleSuggestionClick(suggestion)}
                                onMouseEnter={() => setSelectedIndex(index)}
                            >
                                <span className={styles.suggestionLabel}>
                                    {suggestion.label}
                                </span>
                                {suggestion.type && (
                                    <span className={styles.suggestionType}>
                                        {suggestion.type}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};



