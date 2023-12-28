---
title: Validators | ORM Package
---

# Validators

Validators are meta data applied to the class against each property, as you set data to and from the database, the ORM will validate the data against the validators, and throw an error if the data is invalid.

## Required

The `Required` validator will throw an error if the property is not set, or is set to `null` or `undefined`.

```ts
import { Entity, BaseEntity, Property, Validators } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.String()
	@Validators.Required()
	public name: string;
}
```

## Length

The `Length` validator will throw an error if the property is not set, should be paired with `Required` to avoid null or undefined being passed as it converts the value to a string.

```ts
import { Entity, BaseEntity, Property, Validators } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.String()
	@Validators.Length(5, 10)
	public name: string;
}
```

## Compare

The `Compare` validator will throw an error if the property does not match the given compare property, or is set to `null` or `undefined`.

```ts
import { Entity, BaseEntity, Property, Validators } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.String()
	@Validators.Compare('password')
	public passwordConfirm: string;
}
```

## Unique

The `Unique` validator will throw an error if the property is not unique, this is done by checking the database for any other entities with the same value.

```ts
import { Entity, BaseEntity, Property, Validators } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.String()
	@Validators.Unique()
	public email: string;
}
```

## Email

The `Email` validator will throw an error if the property is not a valid email address, this is done by checking the value against a regular expression.

```ts
import { Entity, BaseEntity, Property, Validators } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.String()
	@Validators.Email()
	public email: string;
}
```

## Password

The `Password` validator will throw an error if the property is not a valid password, this is done by checking the value against a regular expression.

```ts

import { Entity, BaseEntity, Property, Validators } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.String()
	@Validators.Password({ min: 8, special: true })
	public password: string;
}
```
