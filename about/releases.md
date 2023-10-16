---
prev:
  text: Introduction
  link: /about/introduction
next:
  text: Team
  link: /about/team
---

# Releases

We follow [semantic versioning](https://semver.org/), and the release notes are available on the [GitHub releases page](https://github.com/sodacore/core/releases).

> Sodacore is currently in `alpha` and therefore the API is subject to change.

## Release Cycle

Sodacore doesn't have a fixed release cycle, but we aim to keep the framework up to date as often as possible.

- Patches are done as and when needed, and will cover things for hot fixes for bugs, and security patches.

- Minor releases are done when we have new features, or improvements to existing features.

- Major releases are done when significant changes are made to the framework, and will likely require some changes to your application, i.e. breaking changes.

## Pre Releases

Sodacore has a pre-release cycle, which is used to test new features and changes before they are released to the public, these usually come as specific versions, i.e. `alpha`, `beta`, `rc`, etc.

You can install these via adding the tag to the end of the install command, i.e.

```
yarn add sodacore@alpha
// OR
npm install sodacore@alpha
```

> Please note that pre-releases are not recommended for production use, and are subject to change, and that these will only appear once we have our first stable release.

## Deprecation Policy

We will deprecate features and APIs as and when needed, and will provide a deprecation notice in the release notes, and in the documentation.

We will also provide a migration guide for any breaking changes, and will provide a timeline for when the feature or API will be removed.

## RFCs

We follow an RFC (Request for Comments) process for any major changes, and have a specific repository for you to fork and submit your RFCs to.

You can find the RFC repository [here](https://github.com/sodacore/rfcs).

## Experimental Features​

Experimental features are features that are not yet ready for production use, and are subject to change, but can be enabled via `.env` flags (the specific flag will be defined in the documentation for the feature), or via the CLI.

