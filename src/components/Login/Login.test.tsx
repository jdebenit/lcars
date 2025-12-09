import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Login } from './Login';

// Mocks
const loginMock = vi.fn();
vi.mock('../../contexts/AuthContext', () => ({
    useAuth: () => ({
        login: loginMock
    })
}));

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key
    })
}));

describe('Login', () => {
    it('renders login form', () => {
        render(<Login />);
        expect(screen.getByPlaceholderText('login.usernamePlaceholder')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('login.passwordPlaceholder')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'login.loginButton' })).toBeInTheDocument();
    });

    it('disables button when fields are empty', () => {
        render(<Login />);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('enables button when fields are filled', () => {
        render(<Login />);
        fireEvent.change(screen.getByPlaceholderText('login.usernamePlaceholder'), { target: { value: 'user' } });
        fireEvent.change(screen.getByPlaceholderText('login.passwordPlaceholder'), { target: { value: 'pass' } });
        expect(screen.getByRole('button')).toBeEnabled();
    });

    it('calls login on submit', async () => {
        loginMock.mockResolvedValue(true);
        render(<Login />);

        fireEvent.change(screen.getByPlaceholderText('login.usernamePlaceholder'), { target: { value: 'admin' } });
        fireEvent.change(screen.getByPlaceholderText('login.passwordPlaceholder'), { target: { value: '1234' } });

        fireEvent.click(screen.getByRole('button'));

        expect(loginMock).toHaveBeenCalledWith('admin', '1234');
    });

    it('displays error on login failure', async () => {
        loginMock.mockResolvedValue(false);
        render(<Login />);

        fireEvent.change(screen.getByPlaceholderText('login.usernamePlaceholder'), { target: { value: 'bad' } });
        fireEvent.change(screen.getByPlaceholderText('login.passwordPlaceholder'), { target: { value: 'pass' } });

        fireEvent.click(screen.getByRole('button'));

        await waitFor(() => {
            expect(screen.getByText('login.error')).toBeInTheDocument();
        });
    });
});
