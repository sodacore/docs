---
title: Setup & Installation | Core Package
prev:
  text: Overview
  link: ./index
---

# Setup

# Installation

```bash
yarn add @sodacore/core
```

# Usage

```typescript
import { Sodacore } from '@sodacore/core';

const app = new Sodacore({
	// Options...
});
```

## Options

The following options are available when creating a new Sodacore application:

| Option | Type | Default | Required | Description |
| - | - | - | - | - |
| `name` | `string` | `Sodacore Application` | ❌ | The name of the application. |
| `version` | `string` | `<package.json>.version` | ❌ | The version of the application. |
| `autowire` | `boolean` | `true` | ❌ | Whether to automatically. |
| `logger` | `Logger` | `new ConsoleLogger()` | ❌ | The logger to use, but if initialised manually comes with a variety of options to customise it, like log rotations, etc. |

> When started if there are no services active, then the framework will immediately start and exit.
