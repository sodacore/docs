---
title: Repository | ORM Package
prev:
  text: Create an Entity
  link: ./entity
next: false
---

# Create a Repository

Repositories are the core element that you will actually interact with when requesting data, by default, the ORM will offer a basic repository that you can use, to access basic CRUD operations, but if you want some more custom functionality, you can create your own repository and extend it.

## The base repository

The base repository is a simple CRUD repository that you can use to access your data, and can be used like so:

```ts
// Ask the application for the base repository.
const userRepo = app.getRepository(User);

// Let's get a user, they won't exist, but for demo purposes.
const user = await userRepo.get('some-id');

// Create a new user.
const newUser = await userRepo.create({
	name: 'John Doe',
	email: 'john.doe@example.com',
	password: 'password',
});

// Let's update the user's password.
const updateResult = await userRepo.update(newUser.id, {
	password: 'new-password',
});

// Okay, now let's delete the user.
const deleteResult = await user.delete(newUser.id);
```

> If something goes wrong, it will throw an error, we suggest you setup error boundaries within your application, if using with the Sodacore framework, this is done for you.

## Creating a custom repository

Okay, so we have figured the base repository is great, but we want to add some custom functionality like a login control?

Well, we can do that, by creating a custom repository, and extending the base repository, let's create our login function:

```ts
import { Repository, BaseRepository } from '@sodacore/orm';
import User from './user.entity';

@Repository(User)
export class UserRepository extends BaseRepository<User> {

	public async login(email: string, password: string): Promise<string> {

		// Let's find the user first.
		const user = await this.findOne({ email, password });
		if (!user) throw new Error('Invalid credentials.');

		// We have a user, let's generate a session token.
		const token = generateSuperUniqueToken();

		// Update the user with the token.
		await this.update(user.id, {
			session: {
				token,
			},
		});

		// Return the token.
		return token;
	}
}
```

So the above, we extend the base repository with our custom class, and we add a new login function that will allow us to login a user, generate a token, update the user and return the token, from there we can add it to a cookie for the web.

Now, you may have noticed that we update the session, but we never define a created a session object, this is because, by default, the ORM will know you're trying to update a nested object, and will create it for you, if it doesn't exist, each entity with relationships only link the mapped ID, from there the ORM will do the rest.

> You can also create a session object if you want and then do `this.update(user.id, { session: sessionObject });` if you want to.

## Using the custom repository

Now that we have created our custom repository, we can use it like so:

```ts
import { UserRepository } from './user.repository';

// Ask for the repository.
const userRepo = app.getRepository(UserRepository);

// Let's login.
const token = await userRepo.login('john.doe@example.com', 'password');
```

The `getRepository` function is clever enough that if you pass it an entity class, it will return the base repository, but if you pass it a custom repository, it will return that instead, as the user repository already defines the types necessary.
