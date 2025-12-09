import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CodeBlock } from './CodeBlock';

describe('CodeBlock', () => {
    const mockCode = 'const foo = "bar";';

    it('renders code content', () => {
        render(<CodeBlock code={mockCode} />);
        expect(screen.getByText('const foo = "bar";')).toBeInTheDocument();
    });

    it('renders title when provided', () => {
        render(<CodeBlock code={mockCode} title="Example Code" />);
        expect(screen.getByText('Example Code')).toBeInTheDocument();
    });

    it('does not render title when not provided', () => {
        render(<CodeBlock code={mockCode} />);
        const title = screen.queryByRole('heading', { level: 4 });
        expect(title).not.toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<CodeBlock code={mockCode} className="custom-class" />);
        expect(container.firstChild).toHaveClass('custom-class');
    });
});
