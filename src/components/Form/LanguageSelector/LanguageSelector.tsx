import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '../Select/Select';
import styles from './LanguageSelector.module.css';

export const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const options = [
        { label: 'EN', value: 'en' },
        { label: 'ES', value: 'es' }
    ];

    return (
        <div className={styles.languageSelector}>
            <Select
                value={i18n.language}
                onChange={changeLanguage}
                options={options}
                placeholder="LANG"
            />
        </div>
    );
};



