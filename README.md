# Acme App

The GELLIFY Stack is a modern web development stack designed for simplicity, modularity, and full-stack TypeScript safety. Created and refined by [Matteo Badini↗](https://x.com/badini_matteo) and the GELLIFY team, it brings together battle-tested technologies to help developers build scalable, maintainable, and performant applications with minimal friction. Please refer to the [official documentation↗](https://gellify.dev)

## Requirements

- Docker or Podman
- Node Version Manager (fnm recommended to switch version automagically)

## Getting started

First you have to create a copy of the environment variables.

```sh
cp .env.example .env
```

Then follow the instruction below to fill the `.env` with the required pieces to get you started.

### Setup your environment locally

This project uses [pnpm](https://pnpm.io) as its package manager. Install it if you haven't already:

```bash
npm install -g pnpm
```

Then, install the project's dependencies:

```bash
pnpm install
```

This project uses [bun](https://bun.com/) as test runner. If you haven't already installed it, make sure to do so:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Database

**This app has been configured to work WITHOUT a database.** All database connections have been disabled.

If you want to add a database in the future, you can:
- Uncomment the database-related code in the configuration files
- Use the provided `start-localstack.sh` script for local development
- Set up a remote database (Neon, Supabase, etc.) and add the `DATABASE_URL` to your `.env` file

The database setup has been preserved in the codebase but commented out for easy re-enabling when needed.

### Authentication

**This app has been configured to work WITHOUT authentication.** All routes are publicly accessible.

If you want to add authentication in the future, you can:
- Use [NextAuth.js](https://next-auth.js.org/) 
- Re-enable Clerk by adding back the dependencies and configuration
- Use any other authentication provider of your choice

## Editor Setup

We recommended using [Cursor↗](https://www.cursor.com/) a fork of VSCode with a deeper integration with different AI models. We also provide a `.cursorrules` file to give the AI the necessary context on technologies, patterns, conventions...
The following extensions are recommended for an optimal developer experience. The links below provide editor specific plugin support.

- [Tailwind CSS IntelliSense Extension↗](https://tailwindcss.com/docs/editor-setup)
- [Prettier Extension↗](https://prettier.io/docs/en/editors.html)
- [Pretty TypeScript Errors↗](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

## Next Steps

Have a look around the [docs↗](https://gellify.dev), as well as the docs of the packages that your app includes.

## Notes 2025-02-12

- [x] Removed Clerk authentication - app now works without authentication
- [x] Updated all middleware and API routes to work without auth
- [x] Removed sign-in/sign-up pages
- [x] Updated navbar to remove user menu
- [x] Disabled database connections - app now works without database
- [x] Updated environment validation to not require DATABASE_URL
- [x] Commented out all database-related code for easy re-enabling
