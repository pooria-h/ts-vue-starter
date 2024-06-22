## App overview
This is a Starter Vue Typescript project fully configured for Development and testing.
A sample of Component, Util function, Store, and Page in included!

### Highlights:
- __Type check__ is working on Development. When there is a type error, you see it in the dev browser.
- __Apollo__ client for using __GraphQL__ APIs is set up.
- __Lodash__ library is imported.
- __Pinia__ as store is imported.
- __Vue router__ is imported.
- __Unit testing__ with Vitest is set up.
- __End to End__ with Cypress is set up.
- __Tailwind__ is imported.


### App structure
```
|--/src
    |--/assets
    |--/components
      |--/SampleComponent
        |--index (The main component that holds some logic)
          |--/components (sub components of SampleComponent. they emit events and get the data by props)
      |--/shared (The reusable components)
    |--/constants (Where the static data mostly strings are being kept)
    |--/interfaces (The blueprints of the data structure)
    |--/pages (Each page has a specific route)
    |--/store (where the shared data is being kept)
    |--/utils (Reusable functions or Classes without any dependency)
```

## App Setup

`Node version: v18.18.2`

```sh
npm install
```

To run on local machine:
```sh
npm run dev
```

To Build:
```sh
npm run build
```

To run Unit tests:
```sh
npm run test:unit
```

To run End to end tests:
```sh
npm run test:e2e
```

