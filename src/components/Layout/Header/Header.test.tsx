import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
    it('renders title', () => {
        render(<Header title="Main Bridge" />);
        expect(screen.getByText('Main Bridge')).toBeInTheDocument();
    });

    it('renders subtitle', () => {
        render(<Header title="Title" subtitle="Deck 1" />);
        expect(screen.getByText('Deck 1')).toBeInTheDocument();
    });

    it('renders right content', () => {
        render(<Header title="Title" rightContent={<span>Stardate 42333.1</span>} />);
        expect(screen.getByText('Stardate 42333.1')).toBeInTheDocument();
    });
});
