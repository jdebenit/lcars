import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

const meta = {
    title: 'Data/CodeBlock',
    component: CodeBlock,
    tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Standard Protocol',
        code: `interface Starship {
  name: string;
  registry: string;
  class: string;
}`,
    },
};

export const NoTitle: Story = {
    args: {
        code: 'console.log("Hello LCARS");',
    },
};


