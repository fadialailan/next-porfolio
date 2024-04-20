# About

a work in progress porfolio website

# Why not use a static website generator like Astro Js

I do plan to add multiple language support to the website and it would be easier to do so if the content
is dynamicly rendered on the server compared to a staticaly generated website

# Running

## Dependencies

run the following in order to install the dependencies, I will use npm but you can use any npm alternative like yarn, pnpm, bun and e.t.c:

```bash
npm install
```

## Setting up the database

the codebase uses postgresql, so you need to have it setup, once setup you can setup the schema using [go-migrate]

this codebase uses [go-migrate] for its schema migration, to migrate run

```bash
migrate -path='database/migrations' -database=$DATABASE_URL up
```

this will create the schema but it will have no data, for a test setup I recommend running the script
at `database/sample-data.sql`, this script will populate the database with sample data

## Running locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[go-migrate]:https://github.com/golang-migrate/migrate
