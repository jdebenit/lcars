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
    import { LcarsApp, Panel, Button, DataGrid } from '@lcars/react';

    function App() {
      // Components fully support standard HTML attributes
      return (
        <LcarsApp>
          <Panel title="Main Engineering" color="orange" style={{ margin: '20px' }}>
             <h2>SYSTEM DIAGNOSTIC</h2>
             
             <DataGrid 
                columns={[{ field: 'id', headerName: 'ID' }, { field: 'status', headerName: 'STATUS' }]}
                rows={[{ id: 'ENG-1', status: 'OK' }]}
             />

             <div style={{ marginTop: '20px' }}>
                <Button onClick={() => console.log('Engage')} id="engage-btn">
                    INITIATE SEQUENCE
                </Button>
             </div>
          </Panel>
        </LcarsApp>
      );
    }
    ```

## Components

### Form
*   `Button`: Interactive buttons with various LCARS variants.
*   `Checkbox`: LCARS-styled checkbox.
*   `Input`: Text input fields with decoration.
*   `Select`: Dropdown selection.
*   `Radio`: Radio buttons.
*   `Toggle`: Toggle switches.
*   `TextArea`: Multiline text input.

### Layout
*   `Panel`: Standard content container with optional header.
*   `Frame`: Bracket-style container for grouping content.
*   `Header`: Top-level application header.
*   `SideNav`: Vertical navigation menu.
*   `Modal`: Overlay dialogs.

### Data
*   `DataGrid`: Sortable data tables with LCARS styling.
*   `Chart`: Visual data representation.
*   `ApplicationMonitor`: System status visualization.


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
