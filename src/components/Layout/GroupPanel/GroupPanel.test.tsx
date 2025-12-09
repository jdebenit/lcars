import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GroupPanel } from './GroupPanel';

describe('GroupPanel', () => {
    it('renders children', () => {
        render(<GroupPanel>Panel Content</GroupPanel>);
        expect(screen.getByText('Panel Content')).toBeInTheDocument();
    });

    it('renders title', () => {
        render(<GroupPanel title="Sensors">Content</GroupPanel>);
        expect(screen.getByText('Sensors')).toBeInTheDocument();
    });

    it('renders subtitle', () => {
        render(<GroupPanel title="Sensors" subtitle="Long Range">Content</GroupPanel>);
        expect(screen.getByText(/Long Range/)).toBeInTheDocument();
    });
});
