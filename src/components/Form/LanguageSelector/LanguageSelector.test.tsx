import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LanguageSelector } from './LanguageSelector';

// Mock react-i18next
const changeLanguageMock = vi.fn();
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        i18n: {
            language: 'en',
            changeLanguage: changeLanguageMock,
        }
    })
}));

// Mock Select component since it's used inside
vi.mock('../Select/Select', () => ({
    Select: ({ value, onChange, options }: any) => (
        <select data-testid="lang-select" value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((opt: any) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    )
}));

describe('LanguageSelector', () => {
    it('renders language options', () => {
        render(<LanguageSelector />);
        expect(screen.getByTestId('lang-select')).toBeInTheDocument();
        expect(screen.getByText('EN')).toBeInTheDocument();
        expect(screen.getByText('ES')).toBeInTheDocument();
    });

    it('calls changeLanguage on selection change', () => {
        render(<LanguageSelector />);

        fireEvent.change(screen.getByTestId('lang-select'), { target: { value: 'es' } });

        expect(changeLanguageMock).toHaveBeenCalledWith('es');
    });
});
