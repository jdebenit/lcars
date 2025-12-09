import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Frame } from './Frame';

describe('Frame', () => {
    it('renders children', () => {
        render(<Frame>Frame Content</Frame>);
        expect(screen.getByText('Frame Content')).toBeInTheDocument();
    });

    it('renders title', () => {
        render(<Frame title="Main Screen">Content</Frame>);
        expect(screen.getByText('Main Screen')).toBeInTheDocument();
    });

    it('applies color styling to elements', () => {
        const { container } = render(<Frame color="red">Content</Frame>);
        // Check if internal parts have color class
        // Check if internal parts have color class using substring match for CSS modules
        expect(container.querySelector('[class*="color-red"]')).toBeInTheDocument();
    });
});
