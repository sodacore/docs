---
title: ORM | Packages
prev: false
next:
  text: Create an Entity
  link: ./entity
---

# ORM Package

The ORM package is a basic and opinionated ORM specifically for MongoDB, that is designed to focus purely on CRUD operations with the ability to define relationships between entities.

## Introduction

The ORM focuses around decorators and meta programming to provide a simple and easy to use interface for accessing data for your application, if you intend or need more complex operations then you should look at the [@sodacore/prisma](../prisma/index) package, which includes the Prisma ORM.

> **Note:** The reason this package exists, is a lot of the applications I personally build only need simple CRUD access, and Prisma is slightly overkill for that use case, considering it forces setting up a replication layer for MongoDB, so this is a simpler way, I will extend this as necessary and may add more features in the future, like other databases, migrations and more.

## Features

- 🧊 Simple CRUD operations
- 🧩 Relationship support
- 🧪 Decorator based
- 📦 Built-in validation
- 📝 Built-in documentation

## Installation

```bash
yarn add @sodacore/orm
```

## Usage

```ts
import Sodacore from '@sodacore/core';
import ORMPlugin from '@sodacore/orm';

// Create a sodacore instance.
const app = new Sodacore({
	// Options...
});

// Use the ORM plugin and provide any settings.
app.use(new ORMPlugin({
	// Options...
}));
```

## Options

🚧 TBC

_Now we want to create our first entity, click next to continue..._
