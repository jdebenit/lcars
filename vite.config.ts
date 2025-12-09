/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ['src'],
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'LCARSReact',
            formats: ['es', 'umd'],
            fileName: (format) => `lcars-react.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test-utils/setup.ts',
        include: ['src/**/*.test.{ts,tsx}'],
        coverage: {
            include: ['src/components/**/*.{ts,tsx}'],
            exclude: ['**/*.test.{ts,tsx}', '**/*.stories.{ts,tsx}', 'src/**/index.ts', 'src/components/index.ts'],
        },
    },
});
