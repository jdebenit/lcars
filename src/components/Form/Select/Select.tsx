import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';

export interface SelectOption {
    label: string;
    value: string;
}

export interface SelectProps {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan';
    className?: string;
    disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
    options,
    value,
    onChange,
    label,
    placeholder = 'SELECT',
    color = 'orange',
    className = '',
    disabled = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);
    const displayText = selectedOption ? selectedOption.label : placeholder;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelect = (val: string) => {
        if (onChange) onChange(val);
        setIsOpen(false);
    };

    const getColorClass = (c: string) => styles[`color-${c}`] || '';

    return (
        <div ref={containerRef} className={`${styles.selectContainer} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}

            <div
                className={`${styles.selectButton} ${getColorClass(color)} ${disabled ? styles.disabled : ''} ${isOpen ? styles.open : ''}`}
                onClick={handleToggle}
            >
                <div className={styles.decorationLeft}></div>
                <span className={styles.valueText}>{displayText}</span>
                <div className={styles.indicator}>▼</div>
            </div>

            {isOpen && (
                <div className={styles.dropdownList}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`${styles.optionItem} ${option.value === value ? styles.selected : ''}`}
                            onClick={() => handleSelect(option.value)}
                        >
                            <div className={styles.optionBar}></div>
                            <span className={styles.optionLabel}>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
