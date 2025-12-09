import { default as React, ReactNode } from '../../node_modules/react';
interface AuthContextType {
    isAuthenticated: boolean;
    user: {
        username: string;
    } | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}
export declare const AuthProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useAuth: () => AuthContextType;
export {};
