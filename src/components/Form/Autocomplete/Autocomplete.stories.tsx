import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

const meta = {
    title: 'Form/Autocomplete',
    component: Autocomplete,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
        onSelect: { action: 'selected' },
    },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSuggestions = [
    { value: '1', label: 'USS Enterprise', type: 'title' as const },
    { value: '2', label: 'USS Voyager', type: 'title' as const },
    { value: '3', label: 'USS Defiant', type: 'title' as const },
    { value: '4', label: 'Deep Space 9', type: 'url' as const },
];

export const Default: Story = {
    args: {
        label: 'SEARCH SHIP REGISTRY',
        placeholder: 'Enter ship name...',
        suggestions: sampleSuggestions,
        value: '',
    },
};


