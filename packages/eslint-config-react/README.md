# Eslint config for React (@nciocpl/eslint-config-react)
Shared eslint config for react-based projects created for the National Cancer Institute(NCI).

## Installation
In order to download the eslint-config-react package, you will have to set up the @nciocpl organizational scope in npm to see the package.  Create a .npmrc file in the root of your project containing the following:

```
@nciocpl:registry=https://npm.pkg.github.com
```

This module is distributed via npm which is bundled with node and should be installed as one of your project's devDependencies:
```
$ npm install -D @nciocpl/eslint-config-react
```

This library has a required peerDependencies listing for [`eslint`](https://github.com/eslint/eslint)


## Usage
Then add the extends to your .eslintrc.js:

```
module.exports = {
  extends: '@nciocpl/eslint-config-react',
  rules: {
    // your overrides
  },
}
```
