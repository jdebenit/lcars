import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Login.module.css';

export const Login: React.FC = () => {
    const { t } = useTranslation();
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const success = await login(username, password);
            if (!success) {
                setError(t('login.error'));
                setPassword('');
            }
        } catch (err) {
            setError(t('login.error'));
            setPassword('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginPanel}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{t('login.title')}</h1>
                    <p className={styles.subtitle}>{t('login.subtitle')}</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="username">
                            {t('login.username')}
                        </label>
                        <input
                            id="username"
                            type="text"
                            className={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder={t('login.usernamePlaceholder')}
                            required
                            autoFocus
                            disabled={isLoading}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="password">
                            {t('login.password')}
                        </label>
                        <input
                            id="password"
                            type="password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={t('login.passwordPlaceholder')}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    {error && (
                        <div className={styles.error}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className={styles.loginButton}
                        disabled={isLoading || !username || !password}
                    >
                        {isLoading ? t('login.loggingIn') : t('login.loginButton')}
                    </button>
                </form>

                <div className={styles.footer}>
                    {t('login.footer')}
                </div>
            </div>
        </div>
    );
};



