# Nx Smart Monorepo, Fast CI

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Overview

This is a dummy Simform Monorepo managed by Nx. The project contains several apps:

- simform-lms: A React.js application
- simform-skill-matrix: A Next.js application
- simform-server: An Express server

Additionally, there are common libraries for sharing code among the apps, including:

- Shared UI components
- Prisma schema and Prisma client

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Installation & Set up

Clone the repository

```
git clone https://github.com/kashyap27102/POC-Nx-Smart-Monorepo.git
```

Install node-modules

```
npm install
```

Create `.env` file in root folder of project

```
DATABASE_URL=<YOUR_MONGODB_CLOUD_URL>
```

Run following commands for set-up database schema and seed testing data

```
npx nx prisma-schema:generate-types
npx nx prisma-schema:db-push
npx nx prisma-schema:seed
```

start daemon process

```
npx nx daemon
```

## Start Application

### 1. Simform-server (Common Server)

create `.env` file

```
PORT="<ADD PORT HERE>" (eg.5555)
```

Run following command

```
npx nx run simform-server:serve:development
```

### 2. Simform-skill-matrix (Client 1)

create `.env` file

```
SERVER_BASE_URL=<ADD_SERVER_BASE_URL>
```

Run following command

```
npx nx run simform-skill-matrix:dev
```

### 3. Simform-lms (Client 2)

create `.env` file

```
VITE_SERVER_BASE_URL=<ADD_SERVER_BASE_URL>
```

Run following command

```
npx nx run simform-lms:serve
```

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)
