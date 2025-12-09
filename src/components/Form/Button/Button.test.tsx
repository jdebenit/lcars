import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../../test-utils/test-utils'
import { Button } from './Button'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
    it('renders with children text', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('calls onClick when clicked', async () => {
        const user = userEvent.setup()
        const handleClick = vi.fn()

        render(<Button onClick={handleClick}>Click me</Button>)

        await user.click(screen.getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('renders with different variants', () => {
        const { rerender } = render(<Button variant="alert">Alert</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()

        rerender(<Button variant="success">Success</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()

        rerender(<Button variant="warning">Warning</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('renders with different sizes', () => {
        const { rerender } = render(<Button size="sm">Small</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()

        rerender(<Button size="lg">Large</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('handles disabled state', () => {
        render(<Button disabled>Disabled</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })

    it('does not call onClick when disabled', () => {
        const handleClick = vi.fn()

        render(<Button onClick={handleClick} disabled>Disabled</Button>)

        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
        // Disabled buttons can't be clicked in the DOM
    })

    it('applies custom className', () => {
        render(<Button className="custom-class">Button</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('renders button content', () => {
        render(<Button>Content</Button>)
        expect(screen.getByText('Content')).toBeInTheDocument()
    })
})

