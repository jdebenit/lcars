# LCARS React Components

A React component library inspired by the LCARS (Library Computer Access and Retrieval System) interface from Star Trek.

![LCARS Design](https://upload.wikimedia.org/wikipedia/commons/f/f6/LCARS_wallpaper.png) <!-- Replace with a real screenshot of your library later -->

## Features

*   **Authentic Design**: Meticulously crafted to match the LCARS aesthetic (fonts, colors, rounded corners).
*   **Modern Tech Stack**: Built with React, TypeScript, and Vite.
*   **Fully Type-Safe**: Comprehensive TypeScript definitions.
*   **Categorized Components**: logical organization (Layout, Form, Feedback, Data, Modules).
*   **Themable**: Configurable colors via props and standard LCARS palette.

## Installation

```bash
npm install @lcars/react
```

*(Note: This library is currently local/private. Instructions for local dev below)*

## Usage

1.  **Import Styles**:
    In your main entry file (e.g., `main.tsx` or `App.tsx`), import the base styles:

    ```tsx
    import '@lcars/react/styles'; // or relative path to dist/style.css
    ```

2.  **Use Components**:

    ```tsx
    import { LcarsApp, Sidebar, Button } from '@lcars/react';

    function App() {
      return (
        <LcarsApp>
          <Sidebar title="Main Menu" />
          <main>
             <h1>Welcome to the Bridge</h1>
             <Button color="orange" onClick={() => console.log('Engage')}>
                ENGAGE
             </Button>
          </main>
        </LcarsApp>
      );
    }
    ```

## Development

### Setup

```bash
git clone https://github.com/jdebenit/lcars.git
cd lcars-components
npm install
```

### Storybook

View components in isolation:

```bash
npm run storybook
```

### Testing

Run unit tests:

```bash
npm run test
```

### Linting

Check code quality:

```bash
npm run lint
```

## Contributing

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/warp-drive`).
3.  Commit changes (`git commit -m 'Add Warp Drive'`).
4.  Push to branch (`git push origin feature/warp-drive`).
5.  Open a Pull Request.

## License

MIT
