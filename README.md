# Wanderer: A Social Travel Diary

![Travis](https://img.shields.io/travis/chufnagel/wanderer.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/chufnagel/wanderer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/chufnagel/wanderer?targetFile=package.json)
![David](https://img.shields.io/david/chufnagel/wanderer.svg)
![David](https://img.shields.io/david/dev/chufnagel/wanderer.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/chufnagel/wanderer.svg)](https://greenkeeper.io/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9fffe811c8c54542966d3822e7a5d581)](https://www.codacy.com/app/chufnagel/wanderer?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=chufnagel/wanderer&amp;utm_campaign=Badge_Grade)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

## Team

  - __Product Owner__: Mandy Mak
  - __Scrum Master__: Charles Hufnagel
  - __Development Team Members__: Koichi Sakamaki, Lina Lei

## Table of Contents

1. [Usage](#Usage)
1. [Description](#description)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Description

A social network aimed at travelers looking for new places to travel around the world.
Built using React, Redux, Material-UI, Express, and MySQL.

Run behind an Nginx reverse proxy in production. HTTPS certification through LetsEncrypt. CI through Travis CI.

Leverages the Google Places API and Atlas Obscura to find sites of local prominence and any unexplored gems.

## Usage

Environmental variables are set in `.env` (See [`.env.example`](.env.example))
Database defaults to MySQL/Maria, but can be easily substituted with Postgres, Sqlite3, etc. (See [Knex.js docs](https://knexjs.org/) for more information)
Use the Knex CLI or the [`package.json`](package.json) `migrate` and `seed` scripts to import the schema and add demo data.

The app is presently deployed at https://charles-hufnagel.com

## Requirements
- Node.js 10.5.0 or higher, NPM || Yarn
- MariaDB 10.3.7 || MySql 8.0.11
- Knex.js CLI

## Development

### Installing Dependencies

From within the root directory:

For a production build:
```sh
npm install
npm start
```

For a development build (with hot reloading)
```sh
npm run dev
```

### Roadmap

View the project roadmap [here](https://github.com/chufnagel/wanderer/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
