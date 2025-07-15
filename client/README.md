# Angular Project - Client

This README provides instructions to run and debug the Angular client application.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## Installation

```bash
npm install
```

## Running the Application

```bash
ng serve
```

- The app will be available at `http://localhost:4200/`.

## Debugging

### Using VS Code

1. Open the project in VS Code.
2. Go to the Run and Debug panel.
3. Select `ng serve` or configure a launch task in `.vscode/launch.json`:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:4200",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

### Using Chrome DevTools

- Open Chrome and navigate to `http://localhost:4200/`.
- Press `F12` to open DevTools and set breakpoints in the `Sources` tab.

## Useful Commands

- **Build:** `ng build`
- **Test:** `ng test`
- **Lint:** `ng lint`

## Troubleshooting

- Ensure all dependencies are installed (`npm install`).
- If port 4200 is busy, use `ng serve --port <number>`.

---

For more details, refer to the [Angular documentation](https://angular.io/docs).