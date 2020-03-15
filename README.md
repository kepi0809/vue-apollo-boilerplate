# vue-apollo-boilerplate

The setup is strongly inspired by [Chris Fritz's vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate). 

## Tailwindcss

This is my favorite utility-first CSS framework, which makes the development a lot faster. Read more [here](https://tailwindcss.com/docs/utility-first/)

## Generators

This project includes generators to speed up common development tasks. Commands include:

```bash
# Generate a new component with adjacent unit test
yarn new component

# Generate a new view component with adjacent unit test
yarn new view

# Generate a new layout component with adjacent unit test
yarn new layout

# Generate a new utility function with adjacent unit test
yarn new util

# Generate a new end-to-end test
yarn new e2e
```

## Aliases

There are some helpful general aliases set up:

- _@:_ src,
- _@src:_ src
- _@assets:_ src/assets
- _@components:_ src/components/
- _@layouts:_ src/layouts/
- _@utils:_ src/utils
- _@views:_ src/views/

# Linting & formatting

- [Languages](#languages)
- [Scripts](#scripts)
  - [Terminal](#terminal)
  - [Pre-commit](#pre-commit)
  - [Editor](#editor)
- [Configuration](#configuration)
- [FAQ](#faq)

This project uses ESLint, Stylelint, and Prettier to catch errors and avoid bikeshedding by enforcing a common code style.

## Languages

- **JavaScript** is linted by ESLint and formatted by Prettier
- **HTML** (in templates and JSX) is linted by ESLint
- **CSS** is linted by Stylelint and formatted by Prettier
- **Markdown** formatted by Prettier
- **JSON** is formatted by Prettier

## Scripts

There are a few different contexts in which the linters run.

### Terminal

```bash
# Lint all files, fixing many violations automatically
yarn lint
```

See `package.json` to update.

### Pre-commit

Staged files are automatically linted and tested before each commit. See `lint-staged.config.js` to update.

### Editor

In supported editors, all files will be linted and formatted on-save.

## Configuration

This boilerplate ships with opinionated defaults, but you can edit each tools configuration in the following config files:

- [ESLint](https://eslint.org/docs/user-guide/configuring)
  - `.eslintrc.js`
  - `.eslintignore`
- [Stylelint](https://stylelint.io/user-guide/configuration/)
  - `stylelint.config.js`
  - `.markdownlintrc`
- [Prettier](https://prettier.io/docs/en/configuration.html)
  - `.prettierrc.js`
  - `.prettierignore`

## FAQ

**So many configuration files! Why not move more of this to `package.json`?**

- Moving all possible configs to `package.json` can make it _really_ packed, so that quickly navigating to a specific config becomes difficult.
- When split out into their own file, many tools provide the option of exporting a config from JS. I do this wherever possible, because dynamic configurations are simply more powerful, able to respond to environment variables and much more.

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Run your unit tests

```bash
yarn test:unit
```

### Run your end-to-end tests

```bash
yarn test:e2e
```

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
