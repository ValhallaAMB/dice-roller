# dice-roller

Dice roller is a simple project at its core. However, it utilizes a variety of tools such as, AWS, Vite+React, Zustand, Node.js, Prisma, Postgres, and many more.

## Installation

### AWS setup

#### Fully setup AWS for cloud deployment

- [Full AWS setup](./aws_setup.md)

#### Setup Cognito for local use

After signing up/in to your AWS account search for `Cognito` and perform the following:

- Create a "User pool"
  - Application type = Single-page application (SPA)
  - Give it a name
  - Sign in option = Email
  - Required attributes = Email and Preferred_username
- Be sure to copy
  - "User pool ID" from the overview tab
  - "Client ID" from app clients

### Backend setup

1. Move into `server` folder
2. Run `npm i` in the terminal to install node dependencies
3. Change the name of `.env.example` to `.env` and populate the empty variables with your information.
   - Optionally, remove the variable `ARCJET_ENV=development` inside `.env` to switch to a production environment
4. Generate and migrate your prisma database

```terminal
npx prisma generate
```

```terminal
npx prisma migrate dev --name init
```

5. Run `npm run dev` to run the server

### Frontend set up

1. Move into `client` folder
2. Run `npm i` in the terminal to install node dependencies
3. Change the name of `.env.example` to `.env` and populate the empty variables with your information gained from cognito.
4. Run `npm run dev` to run the client
