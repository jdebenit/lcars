import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelector } from './LanguageSelector';
import { useArgs } from '@storybook/preview-api';

const meta = {
    title: 'Form/LanguageSelector',
    component: LanguageSelector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        language: { control: 'select', options: ['en', 'es'] },
        onChange: { action: 'changed' },
    },
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper to handle state
const Template: Story = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [{ language }, updateArgs] = useArgs();
        return (
            <div style={{ backgroundColor: 'black', padding: '20px' }}>
                <LanguageSelector
                    {...args}
                    language={language}
                    onChange={(newLang) => updateArgs({ language: newLang })}
                />
            </div>
        );
    }
}

export const Default: Story = {
    ...Template,
    args: {
        language: 'en',
    },
};


