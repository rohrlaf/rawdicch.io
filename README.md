# rawdicch.io

`/rɔːdɪkiəʊ/`

concept playground for yet another RAW photo library and editor made with web technologies

> Note: This is a pet project, **do not** expect regular updates or issue support

## Core principles

- ease of use with sensible defaults
- modularity and open
- workflow-driven editing process

### Vision

- highly customisable with sensible of defaults
- workflow-driven user experience
  - smooth switch between workflows
  - customisable workflow interface
- module-driven editing process
  - easy to use default mode as inspired by Lightroom and Luminar
  - pro mode that resembles Darktable's in-depth capabilities
- open and clean library structure
  - non-destructive workflow
  - open sidecar file (.xmp) for compatibility
  - central library file for caching and quick navigation

### Inspiration

| Editor                                          | Notes                                                                                                 |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [Capture One](https://www.captureone.com/de)    | + great user interface<br>+ license without subscription available                                    |
| [Darktable](https://www.darktable.org/)         | + powerful editing modules<br>+ xmp sidecar file <br>- steep learning curve (filmic)                  |
| [FastRawViewer](https://www.fastrawviewer.com/) | + histogram based on RAW edits                                                                        |
| [Lightroom CC](https://lightroom.adobe.com/)    | + great user interface<br>+ powerful editing algorithms<br>- expensive subscriptions for personal use |
| [Luminar](https://skylum.com/luminar)           | + great user interface<br>- slow processing speed<br>- broken gallery thumbnails                      |
| [Picturama](https://picturama.github.io/)       | + built with [Electron](https://www.electronjs.org/)<br>+ fast and easy to use                        |
| [RawTherapee](https://rawtherapee.com/)         | - steep learning curve                                                                                |

## Development

### Getting started

Before starting into development, please check for the following dependencies:

```sh
asdf     # (optional) version manager for node and yarn (see .tool-versions)
VSCode   # (optional) editor SDKs included for Yarn
```

Now, you can start the app:

```sh
# install dependencies
yarn

# create .env file (see .env.sample)
touch packages/app/.env
nano packages/app/.env

# create development database (also: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres)
npx prisma migrate dev --name init

# start up the application
yarn start:app

# create a new component
yarn new
```

As a result, you should see a native [Electron](https://www.electronjs.org/) window with the [React](https://reactjs.org/) application running inside.

## Tech stack

This is an incomplete list of the current tech stack:

- [**Electron**](https://www.electronjs.org/) (build native applications from web technologies)
- [**Plop**](https://plopjs.com/) (code consistency for new components)
- [**Prisma**](https://www.prisma.io/) (handling of the library)
- [**React**](https://reactjs.org/)
- [**Tailwind CSS**](https://tailwindcss.com/) (utility-first styling within small components)
- [**TypeScript**](https://www.typescriptlang.org/)
