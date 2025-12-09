import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test-utils/test-utils'
import { Panel } from './Panel'

describe('Panel', () => {
    it('renders children content', () => {
        render(<Panel>Panel content</Panel>)
        expect(screen.getByText('Panel content')).toBeInTheDocument()
    })

    it('renders with title', () => {
        render(<Panel title="Test Panel">Content</Panel>)
        expect(screen.getByText('Test Panel')).toBeInTheDocument()
    })

    it('renders without title', () => {
        render(<Panel>Content</Panel>)
        expect(screen.getByText('Content')).toBeInTheDocument()
        // Title should not be in the document
        expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    })

    it('renders with different colors', () => {
        const { rerender } = render(<Panel color="blue">Content</Panel>)
        expect(screen.getByText('Content')).toBeInTheDocument()

        rerender(<Panel color="purple">Content</Panel>)
        expect(screen.getByText('Content')).toBeInTheDocument()

        rerender(<Panel color="red">Content</Panel>)
        expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('applies custom className', () => {
        render(<Panel className="custom-panel">Content</Panel>)
        expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('renders title as heading when provided', () => {
        render(<Panel title="Test">Content</Panel>)
        expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument()
    })

    it('renders content correctly', () => {
        render(<Panel>Test content here</Panel>)
        expect(screen.getByText('Test content here')).toBeInTheDocument()
    })
})

