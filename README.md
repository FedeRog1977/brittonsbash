---
title:
    - React Notes
author:
    - Lewis Britton
---

# Subject Areas

-   `Node.js`
-   Atomic Design
-   React
-   React Router
-   React Testing Library
-   Cypress
-   Deployment
-   Additional Packages

# `Node.js`

Install `npm`:

```
npm install -g npm
```

Check versions:

```
node -v
npm -v
```

Update:

-   List `Node.js` versions in use and use: `nvm ls`
-   List available versions of `Node.js`: `nvm ls-remote`
-   Install version of choice: `nvm install <x.y.z>`
-   Choose this version using `nvm`: `nvm use <x.y.z>`

Install `pnpm`:

```
npm install -g pnpm
```

Notes:

-   [Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-   [Update](https://stackoverflow.com/questions/8191459/how-do-i-update-node-js)
-   [`pnpm`](https://pnpm.io/installation)

# Atomic Design

Essentially, a method of file arrangement in a repository.

-   [File Structure](https://atomicdesign.bradfrost.com/chapter-2/)

# React

Create React App:

```
npx create-react-app <app-name>
```

Create React App with TypeScript template:

```
npx create-react-app <app-name> --template typescript
```

Basic scripts:

-   Start on `http://localhost:3000`: `npm start`
-   Run tests: `npm test`
-   Build: `npm run build`
-   Eject: `npm run eject`

Typescript notes:

-   [TypeScriptLang.org](https://www.typescriptlang.org/)
-   [Adding TypeScript to React App](https://create-react-app.dev/docs/adding-typescript/)
-   ['Cheat Sheet'](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
-   [Solo Let's Play Walkthrough](https://2ality.com/2018/04/type-notation-typescript.html)

# React Router

Create React App w/ React Router:

```
npx create-react-app react-multi-page-website
```

Install React Router DOM:

```
npm i react-router-dom
```

Notes:

-   [Guide](https://reactrouter.com/en/6.6.1/start/overview)
-   [Practice guide](https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/)
-   [Video tutorial](https://www.youtube.com/watch?v=Ul3y1LXxzdU)

# React Testing Library

Configure:

```
npm install --save-dev @testing-library/react
```

Or:

```
npm install --save-dev @testing-library/react react-test-render
```

Configure Jest:

```
npm i -D --exact jest-watch-typeahead@0.6.5
```

Run Jest tests:

```
npm run test
```

Install Husky:

```
npm install husky --save-dev
```

Notes:

-   [Guide](https://testing-library.com/docs/react-testing-library/cheatsheet/)
-   [Running tests](https://create-react-app.dev/docs/running-tests/)
-   [`npm-test` guide](https://docs.npmjs.com/cli/v8/commands/npm-test)
-   [Jest](https://jestjs.io/docs/api)
-   [Video tutorial](https://www.youtube.com/watch?v=ML5egqL3YFE)
-   [Example](https://github.com/harblaith7/React-Testing-Library-Net-Ninja)
-   [Husky example](https://www.npmjs.com/package/husky)
-   [`.gitignore` snapshots](https://stackoverflow.com/questions/53230363/how-to-gitignore-snapshot-folders)

# Cypress Testing

When using Cypress for TypeScript, ensure the most recent version of TypeScript is installed, using `npm`:

```
npm install --save-dev typescript
```

Install Cypress from your working directory, also using `npm`:

```
npm install cypress --save-dev
```

Run Cypress, using `npx`:

```
npx cypress run
```

Notes:

-   [Cypress guide](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)
-   [Cypress for TypeScript](https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript)
-   [Cypress documentation](https://docs.cypress.io/api/table-of-contents)

# Deployment

This example uses a sample of a TypeScript React App with React Router which is deployed using GitHub pages, branching directly from the repository.

Ensure you are using `<HashRouter />` from React Router

Install GitHub pages:

```
npm install gh-pages --save-dev
```

Add `homepage` to `package.json`:

```
"homepage": "http://<gh-username>.github.io/<gh-repo-name>"
```

Add `predeploy` script to `scripts` in `package.json`:

```
"predeploy": "npm run build"
```

Add `deploy` script to `scripts` in `package.json`:

```
"deploy": "gh-pages -d build"
```

Run the deployment:

```
npm run deploy
```

From GitHub desktop, `<gh-repo-name>` - Settings - Pages, ensure Source is set to 'Deploy from a branch' and this Branch is called 'gh-pages'.

Notes:

-   [Video guide](https://www.youtube.com/watch?v=1wDzEjXbblM&t=319s)

# Additional Packages

## Prettier

Install Prettier:

```
npm install --save-dev --save-exact prettier
```

Create empty config file:

```
echo {}> .prettierrc.json
```

Create `.prettierignore` file to ignore formatting of some files, e.g.:

```
# Ignore artifacts:
build
coverage
```

Format files:

```
npx prettier --write .
```

-   [Guide](https://prettier.io/docs/en/install.html)

## React Responsive Carousel

Install:

```
npm install react-responsive-carousel --save
```

-   [Guide](https://www.npmjs.com/package/react-responsive-carousel?activeTab=readme)
-   [Guide](https://react-responsive-carousel.js.org/)

## React Leaflet

Install React DOM Leaflet:

```
npm install react react-dom leaflet
```

Install React Leaflet:

```
npm install react-leaflet
```

Add TypeScript support:

```
npm install -D @types/leaflet
```

-   [Guide](https://react-leaflet.js.org/docs/api-map/)
-   [Video guide](https://www.youtube.com/watch?v=290VgjkLong)
-   [Using Ordnance Survey](https://stackoverflow.com/questions/74407099/use-ordinance-survey-map-tiles-in-react-leaflet)

## Proj4 Leaflet

Install Proj4:

```
npm install proj4
```

Add TypeScript support:

```
npm install --save @types/proj4
```

-   [Guide](https://www.npmjs.com/package/proj4)

Install Proj4 Leaflet (for CRS):

```
npm install --save proj4leaflet
```

Add TypeScript support:

```
npm install --save @types/proj4leaflet
```

-   [Guide](https://kartena.github.io/Proj4Leaflet/#examples)
