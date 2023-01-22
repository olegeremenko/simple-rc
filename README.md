# Simple Remote Control

# Install the application

Clone from the repository

```bash
git clone git@github.com:olegeremenko/simple-rc.git
```

Checkout to develop branch

```bash
git checkout develop
```

Setup dependencies with

```bash
npm install
```

Copy `.env.example` to `.env` and update the port value if needed

## Run the application

Development mode:

```bash
npm run start
```

This command will run the application in development mode with `nodemon` on a port from `.env`.

Navigate to your web client page (please use this interface https://github.com/rolling-scopes-school/remote-control) and connect to the server:

```
http://localhost:8081
```

