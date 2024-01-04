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
-   Storybook
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

# Storybook

Storybook is a frontend workshop environment tool for UI/UX development which allows you to sample and interact with the properties of functional components, out of context.

Install Storybook:

```
npx storybook@latest init
```

Run Storybook:

```
npm run storybook
```

Notes:

-   [Guide](https://storybook.js.org/docs/get-started/install)

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

## Custom Domain

In this example we'll be using this website `brittonsbash.com`.

First, navigate to your domain provider. I use [Epik](https://registrar.epik.com/domain/portfolio), although this process will be almost identical no matter which one you use.

From here, navigate to your purchased domain, 'SET DNS HOST RECORDS', and 'EXTERNAL HOSTS'. Delete the current records and add four new ones, leaving 'Host' blank, setting 'Type' to 'A (IPv4)', and 'TTL' to 300.

In the 'Points to' field, add the four GitHub Pages IP addresses found in the [documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). These are:

-   185.199.108.153
-   185.199.109.153
-   185.199.110.153
-   185.199.111.153

Your job on your domain management service is done.

Next, navigate to your [GitHub Pages settings](https://github.com/FedeRog1977/brittonsbash/settings/pages) and enter the new custom domain under 'Custom domain', and run the DNS check. Also check the 'Enforce HTTPS' box. At this point, the test will fail.

You must now navigate back to your repository and make amendments to the code described above. In `package.json`, amend the `homepage` field from, e.g., `https://federog1977.github.io/brittonsbash` to `https://<custom-domain>`, i.e. `https://<brittonsbash.com>`.

Now, in your `public` directory, add a file named `CNAME` and type one line: `<custom-domain>`, i.e., `brittonsbash.com`.

Run the deployment:

```
npm run deploy
```

Navigate back to your GitHub Pages settings and re-run the DNS check. It should pass now. Leave this for a few minutes and your site should be available on the custom domain.

-   [Video guide](https://www.youtube.com/watch?v=K5DTIf-jWhk)

# Application Servers

It will frequently be the case, for example, that when you've made an update to a component you may need to update your **Typescript Server**. Or perhaps, for example, when a piece of code is changed which once did not satisfy your desired ES Lint rules but now does, you will have to reset your **ES Lint Server**. There may apply any other examples within these applications or other where this may be the case.

To essentially hit a reset and restart these servers, select your control key + `Shift` + `P` and select the relevant server reset. This is assuming you use VS Code to develop.

If you reset a simple application server, the disk data on the server is deleted, and the snapshots that were created before the reset are retained but cannot be used to roll back the disks of the server.

# Additional Packages and Dependencies

## Classnames

Classnames allows you to format SCSS module classnames, etc.

Install classnames:

```
npm install classnames
```

-   [Guide](https://www.npmjs.com/package/classnames)

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

## React Lazy Load Image Component

Install:

```
npm i --save react-lazy-load-image-component
```

Add TypeScript support:

```
npm install -D @types/react-lazy-load-image-component
```

-   [Guide](https://www.freecodecamp.org/news/how-to-lazy-load-images-in-react/)

## React Modal

Install:

```
npm i --save react-modal
```

Add TypeScript support:

```
npm install -D @types/react-modal
```

-   [Guide](https://www.npmjs.com/package/react-modal)

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
