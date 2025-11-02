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

## Technologies

### Languages

- TypeScript
- JavaScript

### Backend 

- Express
- PostgreSQL (Database)
- Prisma ORM
- Arcjet (bot protection, rate limiting, email validation, etc)

### Frontend

- React + Vite
- Zustand
- Axios
- AWS Amplify
- Tailwind
- React Hook Form and Zod (Input handling)

## Resources

- [React](https://react.dev/reference/react)
- [Tailwind using Vite](https://tailwindcss.com/docs/installation/using-vite)
- [AWS Amplify](https://docs.amplify.aws/)
- [Prisma Docs](https://www.prisma.io/docs)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [Arcject Docs](https://docs.arcjet.com/)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Zod](https://zod.dev/)
- [NGINX with AWS Docs](https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ec2-instances-for-nginx/)
- Build a Nextjs Project Management App & Deploy on AWS | Cognito, EC2, Node, RDS, Postgres, Tailwind [Youtube](https://youtu.be/KAV8vo7hGAo?si=XtGuGRxKm1vboM0c)
- PERN Stack Course: Build a Product Store with Postgres & React [Youtube](https://youtu.be/lx3YJj0nJVk?si=vTfQ_FlezoxUqD0a)
- AWS Full Course | Deploy a Scalable NodeJS PostgreSQL & NGINX App [Youtube](https://youtu.be/H93Vhy6pmow?si=oiGqfgYAWHmIXFTT)
