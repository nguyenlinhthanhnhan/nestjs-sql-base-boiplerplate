## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.  

##### This project is a simple example of how to use NestJS with TypeORM and Postgres.  
#### Features: TypeORM code first, migrations, docker-compose, swagger, jwt auth, argon2, validation, etc.

## Installation

```bash
$ yarn install
```

## Swagger path:
```
/docs
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

# Docker compose run:
```bash
docker-compose up -d
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## DB Utils
Generate migration

```bash
yarn run migration:generate -- src/database/migrations/CreateNameTable 
```

Run migration

```bash
yarn run migration:run
```

Revert migration

```bash
yarn run migration:revert
```

Drop all tables in database

```bash
yarn run schema:drop
```