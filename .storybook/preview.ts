import type { Preview } from "@storybook/react";
import "../src/styles/lcars-variables.css";
import "../src/styles/lcars-base.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'lcars-black',
            values: [
                {
                    name: 'lcars-black',
                    value: '#000000',
                },
            ],
        },
    },
};

export default preview;
