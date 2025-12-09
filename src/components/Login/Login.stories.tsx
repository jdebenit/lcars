import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Login } from './Login';
import { AuthProvider } from '../../contexts/AuthContext';

const meta = {
    title: 'Modules/Login',
    component: Login,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <React.Suspense fallback={<div>Loading...</div>}>
                <AuthProvider>
                    <Story />
                </AuthProvider>
            </React.Suspense>
        ),
    ],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;




