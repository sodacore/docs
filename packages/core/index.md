---
title: Core | Packages
prev: false
next:
  text: Setup
  link: ./setup
---

# Core Package

The Sodacore core package provides the foundation for intialising and running a Sodacore application alongside offering the basic building blocks for creating plugins to interact/interface with and provide new features.

## What is Sodacore?

Sodacore is a framework for building complex applications with a focus on being simple and easy to use while being extendable.

The Sodacore framework is a service-based system, where you create a service that, for example, may create a HTTP server, and then handle and dispatch events to your logical controllers where you would write your business logic.

## What features does the framework come with out of the box?

The framework comes with the following features out of the box:

- Controller design pattern.
- Autowiring out of the box.
- Dependency Injection out of the box.
- Task scheduling.
- Framework event hooks.
- Extendable plugin system.
- CLI tooling.
- Message Broker.
- Thread / Worker engine.
- Fibre engine.
- HTTP Server (Provided by `@sodacore/http`)
- Websocket Server (Provided by `@sodacore/ws`)
- Database ORM (Provided by `@sodacore/orm`)
- Discord Bot (Provided by `@sodacore/discord`)
- Twitch Bot (Provided by `@sodacore/twitch`)
- Internationalisation (Provided by `@sodacore/i18n`)

_and more..._
