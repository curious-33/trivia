[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Twitter][twitter-shield]][twitter-url]

# Trivia

A simple quiz app built with React, TypeScript, and Redux, powered by the [Open Trivia Database](https://opentdb.com) API.

**[Live Demo](https://curious-33.github.io/trivia)**

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## About

This project started as a take-home interview task and grew into a small, complete quiz application: pick categories/difficulty, answer questions, track score.

## Tech Stack

- [React](https://react.dev/) 18 + [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/) + [Redux Saga](https://redux-saga.js.org/) for state and side effects
- [React Router](https://reactrouter.com/) v6
- [SCSS](https://sass-lang.com/) for styling
- [Axios](https://axios-http.com/) for API requests

## Getting Started

### Prerequisites

- Node.js >= 12 (LTS recommended; older versions may hit unexpected issues)
- [Yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/curious-33/trivia.git
cd trivia
yarn install
```

### Environment Variables

Create a `.env` file in the project root:

```
REACT_APP_API_BASE_URL=https://opentdb.com
```

This points the app to the Open Trivia Database API.

## Available Scripts

| Command | Description |
| --- | --- |
| `yarn start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000) |
| `yarn build` | Builds the app for production to the `build` folder |
| `yarn test` | Runs the test suite |
| `yarn deploy` | Builds and deploys the app to GitHub Pages |

## Project Structure

```
src/
├── assets/       # fonts, images, and global styles
├── components/   # reusable UI components (Button, Fields, ProgressBar, ...)
├── config/       # app configuration
├── constants/     # shared constants
├── layout/       # page layout components
├── modules/      # feature modules
├── services/     # API clients
├── store/        # Redux store, reducers, sagas
├── utils/        # helper utilities
└── views/        # top-level pages/routes
```

## Deployment

The app is deployed to GitHub Pages via [gh-pages](https://github.com/tschaub/gh-pages):

```bash
yarn deploy
```

This runs `predeploy` (production build) followed by publishing the `build` folder to the `gh-pages` branch.

## Contributing

Contributions are welcome.

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes
4. Push to your branch and open a Pull Request

Please open an issue first for major changes to discuss what you'd like to change.

## License

No license specified yet. All rights reserved by the author unless stated otherwise.

[contributors-shield]: https://img.shields.io/github/contributors/curious-33/trivia
[contributors-url]: https://github.com/curious-33/trivia/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/curious-33/trivia?style=social
[forks-url]: https://github.com/curious-33/trivia/network/members
[stars-shield]: https://img.shields.io/github/stars/curious-33/trivia?style=social
[stars-url]: https://github.com/curious-33/trivia/stargazers
[issues-shield]: https://img.shields.io/github/issues/curious-33/trivia
[issues-url]: https://github.com/curious-33/trivia/issues
[twitter-shield]: https://img.shields.io/twitter/follow/imcurious_33?logoColor=blue&style=social
[twitter-url]: https://twitter.com/imcurious_33
