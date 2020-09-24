# Thanks_bot 2

This is a simple discord bot to keep track of helpfull people so mods can reward them. It

# Dependencies

- Node (v14.10.0)
- Yarn (npm install yarn -g)
- Postgresql

# Setup

1. rename dabtabase.example.json to dabtabase.json
2. fill in the database connection string in database.json
3. rename postgres.example.json to postgres.json
4. fill here the database connection in again (I know, feels redundand)
5. run `yarn install`
6. run `yarn migrate up` to run the migrations

Congrats, you can now run the bot.

# Usefull scripts

1. `prepareSql` reads the sql files and updates the generated types (use -w to run in watch mode)
2. `start:dev` automatically recompiles and restarts on changes
3. `build` does a clean build
4. `start` does a clean build, then starts the bot
5. `migrate` to run [db-migrate](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/usage/)