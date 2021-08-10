# Cancer.gov Linting Standards
This repository contains a rollup of commonly used eslint rules configuration/setup as an npm package for use with National Cancer Institute(NCI) projects.

### Packages
| Package name | Description |
| --- | ----- |
| [`eslint-config-react`](./packages/eslint-config-react)     |  Shared eslint-config for react-based projects |
| [`eslint-config-vanilla-js`](./packages/eslint-config-vanilla-js) |  Shared eslint-config for javascript projects |

### Publishing
When publishing, the test apps should not be published.  The test-app package.jsons have `private: true` to prevent publishing.  When using lerna commands for versioning and publishing, the `--no-private` flag should be set. 