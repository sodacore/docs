---
title: Entity | ORM Package
prev:
  text: Getting Started
  link: ./index
next:
  text: Create a Repository
  link: ./repository
---

# Create an Entity

Entities are the building blocks of the ORM, they are the models that represent the data in your database / collection.

The Sodacore ORM uses these building blocks to map data to and from your database, and provide a simple interface for interacting with your data.

## Your first entity

To create your first entity, let's define a basic user.

```ts
import { Entity, Property } from '@sodacore/orm';

@Entity()
export class User extends Entity {

	@Property.Auto()
	public id: string;

	@Property.String()
	public name: string;

	@Property.String()
	public email: string;

	@Property.String()
	public password: string;
}
```

As you can see above, we have created an ID, name, email and password, this defines our basic user model, and this works great.

> There are many property types available that you can choose from, you can find a list of them [here](./property).

## Adding validation

Now this is great, but at runtime, we want to validate the data being inserted into the database, to make sure it meets the requirements, so let's add some validation.

```ts
import { Entity, Property } from '@sodacore/orm'; // [!code --]
import { Entity, Property, Validate } from '@sodacore/orm'; // [!code ++]

@Entity()
export class User extends Entity {

	@Property.Auto()
	public id: string;

	@Property.String()
	@Validate.Required() // [!code ++]
	public name: string;

	@Property.String()
	@Validate.Required() // [!code ++]
	@Validate.Email() // [!code ++]
	@Validate.Unique() // [!code ++]
	public email: string;

	@Property.String()
	@Validate.Required() // [!code ++]
	@Validate.Password({ min: 8, special: true }) // [!code ++]
	public password: string;
}
```

Perfect, we have now added some basic validation steps, this ensures that at runtime we can validate the data being inserted into the database, and if it fails, we can throw an error back to the caller.

> You can learn more about available validation rules and their settings [here](./validators).

## Hidden properties

Now we have one more problem, well not necessarily a problem, but a caution, if we list the data in our database, we will see the password, which is not ideal, so let's hide that by default from any lists that don't specifically request it.

```ts
import { Entity, Property, Validate } from '@sodacore/orm';

@Entity()
export class User extends Entity {

	@Property.Auto()
	public id: string;

	@Property.String()
	@Validate.Required()
	public name: string;

	@Property.String()
	@Validate.Required()
	@Validate.Email()
	@Validate.Unique()
	public email: string;

	@Property.String() // [!code --]
	@Property.String({ hidden: true }) // [!code ++]
	@Validate.Required()
	@Validate.Password({ min: 8, special: true })
	public password: string;
}
```

Great, now we have a basic user entity, that has validation and won't accidently send users' passwords to the client.

> When it comes to passwords, YOU are expected to hash them before inserting them into the database, this is not something the ORM will do for you, as it is not the ORM's responsibility to do so.

## Adding relationships

Now we have a basic user entity, but we want to create a session entity, that will store a user's session and any useful information.

> This is a very basic example to demo functionality.

```ts
import { Entity, Property, Validate } from '@sodacore/orm';
import { User } from './user.entity';

@Entity()
export class Session extends Entity {

	@Property.Auto()
	public id: string;

	@Property.OneToOne(User, { eager: false })
	@Validate.Required()
	public user: User;

	@Property.String()
	@Validate.Unique()
	public token?: string;
}
```

We now have a session entity, that we have defined a one to one relationship with User, but we have defined `eager: false`, this means that when we get the session, it will not automatically load the user, it will only do this when we attempt to access the data against the user property.

You will notice we pass the required status to the user, this is because a session can't exist without a user, so we want to make sure it is there on load.

Now we have our session entity, we can get any user data connected to this session, and vice versa... well actually we can't, we need to add the relationship to the user entity.


```ts
import { Entity, Property, Validate } from '@sodacore/orm';
import { Session } from './session.entity'; // [!code ++]

@Entity()
export class User extends Entity {

	@Property.Auto()
	public id: string;

	@Property.String()
	@Validate.Required()
	public name: string;

	@Property.String()
	@Validate.Required()
	@Validate.Email()
	@Validate.Unique()
	public email: string;

	@Property.String()
	@Property.String({ hidden: true })
	@Validate.Required()
	@Validate.Password({ min: 8, special: true })
	public password: string;

	@Property.OneToOne(Session, { eager: false }) // [!code ++]
	public session?: Session; // [!code ++]
}
```

So we have our relationship to session now, this is great and works as planned, but you may have noticed we have defined `session` property as optional, this is for a few reasons, but mainly because the user may not have a session, in the session object we don't do this.

This is because in this use case, the session can't exist without a user so we don't want to force it to be there, even with `eager: true` we would keep this optional, you can of course define this as required if you wish, but make sure you add some kind of validation to ensure it is there.

## Next Steps

_Now we want to create a repository for our entity, click next to continue..._
