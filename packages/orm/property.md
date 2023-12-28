---
title: Property | ORM Package
---

# Property Types

A property is a property on an entity object, it defines the data type, and how it should be stored in the database, there are many different types of properties available, and you can find a list of them below.

> Each property can take options, most of these are shared, like `hidden` but some are specific to the property type.

### Shared Options

| Option | Type | Description |
| - | - | - |
| `hidden` | boolean | If set to true, the property will not be returned when fetching the entity. |
| `mapTo` | string | If set, the property will be mapped to the given property name in the database, you are in charge of preventing clashes. |


## Auto

The `Auto` property is a special property that simply gets the database's auto generated ID, but be aware that in MongoDB these are strings, because MongoDB stores it's IDs as `_id` we auto map the `_id` to the `id` property, so you can use `id` as the primary key, but of course this can be any property you want.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.Auto()
	public id: string;
}
```

## Boolean

The `Boolean` property is a simple boolean value, it can be `true` or `false`, and is stored as a boolean in the database.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.Boolean()
	public blocked: boolean;
}
```

## String

The `String` property is a simple string value.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.String()
	public name: string;
}
```

## Number

The `Number` property is a simple number value, will also handle floats.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.Number()
	public warnings: number;
}
```

## Date

The `Date` property is a simple date value and is converted to and from a datetime string.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.Date()
	public created: Date;
}
```

## Array

The `Array` property is a simple array value.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.Array()
	public hobbies: string[];
}
```

## Object

The `Object` property is a simple object value.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

export type ExampleEntitySocials = {
	twitter: string;
	facebook: string;
	instagram: string;
}

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.Object()
	public socials: Record<string, any>;

	// OR...

	@Property.Object()
	public socials: ExampleEntitySocials;
}
```

## OneToOne

The `OneToOne` property is a special property that allows you to link two entities together, this is done by storing the ID of the entity in the database, and then when you fetch the entity, it will automatically fetch the linked entity and populate the property with the linked entity.

> The above behaviour is only done in `eager` setting is set to true, by default it will look it up when you try to access it.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.OneToOne(ExampleEntity)
	public example: ExampleEntity;

}
```

## OneToMany

The `OneToMany` property is a special property that allows you to link two entities together, this is done by storing an array of entity IDs in the database, and then when you fetch the entity, it will automatically fetch the linked entities and populate the property with the linked entities.

> The above behaviour is only done in `eager` setting is set to true, by default it will look it up when you try to access it.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.OneToMany(ExampleEntity)
	public examples: ExampleEntity[];

}
```

## ManyToOne

The `ManyToOne` property is a special property that allows you to link two entities together, this is done by storing the ID of the entity in the database, and then when you fetch the entity, it will automatically fetch the linked entity and populate the property with the linked entity.

> The above behaviour is only done in `eager` setting is set to true, by default it will look it up when you try to access it.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.ManyToOne(ExampleEntity)
	public example: ExampleEntity;

}
```

## ManyToMany

The `ManyToMany` property is a special property that allows you to link two entities together, this is done by storing an array of entity IDs in the database, and then when you fetch the entity, it will automatically fetch the linked entities and populate the property with the linked entities.

> The above behaviour is only done in `eager` setting is set to true, by default it will look it up when you try to access it.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.ManyToMany(ExampleEntity)
	public examples: ExampleEntity[];

}
```

## Custom

The `Custom` property is a special property that allows you to define your own custom property, this is useful for when you want to store the given data in a different format, the way it works is that you will define a input and output converter function that will convert the data to and from the database, and you can simply define any "Type" that represents that object.

```ts
import { Entity, BaseEntity, Property } from '@sodacore/orm';

@Entity()
export class ExampleEntity extends BaseEntity {

	@Property.Custom({
		input: (value: string) => JSON.parse(value),
		output: (value: any) => JSON.stringify(value),
	})
	public data: Record<string, any>;

}
```

> The input and output properties CAN be async, and will be awaited when they are called, this means you can populate properties not just from internal places, but externally against APIs.
