---
prev:
  text: Community Guide
  link: /about/community
next:
  text: Getting Started
  link: /docs/guide/index
---

# FAQs

Here are some frequently asked questions about Sodacore and the packages.

## What is Sodacore?

Sodacore is a modern, TypeScript-powered framework that utilises the latest web technologies to build complex applications with less code, where the Sodacore framework does most of the routing, autowiring and general boilerplate that you shouldn't need to care about.

Sodacore's main goal, is to make a framework that has the least resistance to get started with, and come out with a production level application at the end.

## Why should I use Sodacore?

Sodacore is a great framework for building complex applications, with a lot of features that you would expect from a modern framework, such as:

- 🧊 Autowiring by default
- 🧩 Dependency injection
- 🧪 Plugin system
- 📦 Core maintained plugins, i.e. http, websocket, database, etc.
- 📝 Built-in logging
- 📚 Built-in documentation
- 🖥️ CLI for tooling

## What packages and built-in features does Sodacore have?

Sodacore is a collection of packages, that are all maintained under the same repository, and are all published under the `@sodacore` namespace.

The core packages are:

| Package | Description |
| - | - |
| **Core** | The core package that provides the core functionality of the framework, including; autowiring, dependency injection, plugin system, and more. |
| **Http** | The http package provides a built-in http server, with a controller system, and a built-in router. |
| **WebSocket** | The websocket package provides a websocket server that can integrate to the HTTP package or standalone to create controller based WebSocket applications with it's own router. |
| **Database** | The database package provides a Prisma ORM database client, with an injected system for access in your controllers. |
| **CLI** | The CLI package provides a CLI tool for scaffolding out new projects, running commands, and finally for interacting with existing running applications, using a GUI or command line. |

_And more to come!_

## How do I get started?

Check out the [Getting Started](/docs/guide/index) guide to get started with Sodacore.

## How do I contribute, request features or report a bug?

Check out the [Code of Conduct](/about/code-of-conduct) and then head over to our [Community Guide](/about/community) guide to get started.
