# Eslint config for React + Typescript (@nciocpl/eslint-config-react-ts)
Shared eslint config for Typescript react-based projects created for the National Cancer Institute (NCI).

## Installation
In order to download the eslint-config-react-ts package, you will have to set up the @nciocpl organizational scope in npm to see the package.  Create a .npmrc file in the root of your project containing the following:

```
@nciocpl:registry=https://npm.pkg.github.com
```

This module is distributed via npm which is bundled with node and should be installed as one of your project's devDependencies:
```
$ npm install -D @nciocpl/eslint-config-react-ts
```
Requirements:
* Eslint >= 7.20.0
* Typescript >= 5.0.0

## Usage
Then add the extends to your .eslintrc.js:

```
module.exports = {
  extends: '@nciocpl/eslint-config-react-ts',
  rules: {
    // your overrides
  },
}
```
