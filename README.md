# Cancer.gov Linting Standards
This repository contains a rollup of commonly used eslint rules configuration/setup as an npm package for use with National Cancer Institute(NCI) projects.

### Packages
| Package name | Description |
| --- | ----- |
| [`eslint-config-react`](./packages/eslint-config-react)     |  Shared eslint-config for react-based projects |
| [`eslint-config-vanilla-js`](./packages/eslint-config-vanilla-js) |  Shared eslint-config for javascript projects |

### Publishing
When publishing, the test apps should not be published.  The test-app package.jsons have `private: true` to prevent publishing. At some point much of this will be automated, but for now here are the steps.

#### Publishing Steps for Tests
1. Version all the packages.
   * `lerna version --no-git-tag-version X.Y.Z-alpha-DD` where X, Y, Z and DD are numbers. Whatever this is, it must be unique.
2. Publish the packages
   * `lerna publish --force-publish --no-push --yes from-package`

>**_NOTE:_** This will update the package.json files everywhere. Try not to commit those changes - we don't want a bunch of commits littering our history just for beta version bumps.

#### Publishing Steps for Prod Release
1. Create release branch
   * This will be of the format `release/vX.Y.Z` (This should be greater than whatever the current version is)
   * Technically we should test a beta version of the release here.
2. Version all the packages.
   * `lerna version --no-git-tag-version X.Y.Z` where X, Y, and Z are numbers. (This should be greater than whatever the current version is)
	   * **NOTE** There is no `v` at the beginning of the version!!
3. Merge the release to main
	 1. Checkout main
	    * `git checkout main`
	 2. Make sure you are up to date
	    * `git pull`
	 3. Merge the release branch
      * `git merge --no-ff release/vX.Y.Z -m "Merging release vX.Y.Z"`
	 4. Push the main branch
	    * `git push`
	 5. Create the release
	    * `hub release create -t release/vX.Y.Z -m "vX.Y.Z Release" vX.Y.Z`
4. Publish the packages. This uses the version from all the package.json files and avoids running lerna version, as well as skip pushing a commit. I.E. It just publishes.
   * `lerna publish --force-publish --no-push --yes from-package`
5. Merge to develop
	 1. Checkout develop
	    * `git checkout develop`
	 2. Make sure you are up to date
	    * `git pull`
	 3. Merge the release branch
      * `git merge --no-ff release/vX.Y.Z -m "Merging release vX.Y.Z"`
	 4. Push the main branch
	    * `git push`
6. Remove the release branch.
