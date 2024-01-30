# Todolist

View demo: [deployed version](https://mern-todo-ksst.onrender.com)

## Description

The test task involved developing a web application for managing a list of tasks using ReactJS as a front-end technology and Mongo DB / PostgreSQL for storing data on the back-end.
### Requirements:
- Creating an interface for the task list, allowing you to add, change and delete tasks.
- Implementation of the functionality for adding a new task indicating the title, description and status.
- Ability to change existing tasks: editing title, description and status.
- Implementation of the function of removing a task from the list.
- Saving task data in a Mongo DB / PostgreSQL database for later display and modification.

### Technical details:
- Front-end development in ReactJS using modern practices and libraries.
- Backend for storing task data in Mongo DB / PostgreSQL.
- API for interaction between frontend and backend.

## Features

### Setup

```bash
https://github.com/Auqpiro/mern-todo.git
make install
```

### Use case in development

Running EsLint

```bash
make lint
```

Running build

```bash
make build
```

Launch backend server

```bash
make start
```

Launch backend server with hot reload

```bash
make dev
```

### Use case in deploy

To deploy to any PaaS use the build and start commands

```bash
make build
make start
```

Project uses variable environment of [MongoDB](https://www.mongodb.com/). Set this in your deployment as link to your MongoDB Athlas database deployment (required!)

```bash
DB_CONNECT
```

and environment variable for setting port listening of server

```bash
PORT
```
