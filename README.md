# mobx-inferno-starter

## Project Goals:
* Provide template for others to use for simple mobx + inferno projects
* Small bundle size (currently ~40kB gzip, smaller than react-dom + react min bundles ~44.3kB gzip)
* (async code split components still WIP) Setup aims to provide simple routing and code split async loaded views (using webpack + mobx + http-hash for routing)
* (WIP) Server-side rendering and easy pre-rendering for simple static pages
* (Adding support as components are utilized) material-components-web integration for clean styling

## Commands
For development:

    npm run dev

For production build:

    npm run build

For testing in browser:

    npm run test:dev

For testing in node:

    npm run test

For linting:

    npm run lint

For lint auto corrections:

    npm run lint:fix
