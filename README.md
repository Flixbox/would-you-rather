# Would You Rather?

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub last commit](https://img.shields.io/github/last-commit/Flixbox/would-you-rather.svg)](https://github.com/Flixbox/would-you-rather)
![David](https://img.shields.io/david/Flixbox/would-you-rather.svg)

Would You Rather? is a game about choice. Log in, answer questions and make your own questions!

## A hint about the list functionality...

This project does not contain the classic list of questions. Instead, the user can navigate through the questions one by one.
The questions are sorted by timestamp and the user is able to filter them in the navigation bar.

When the user applies a filter, they aren't immediately redirected (because the filter can be changed from anywhere in the app).

Trust me, this was more complex than the list would've been. It works though. And it looks nice.

## Starting the application

-   Install yarn.
-   Navigate to the repo.
-   Run `yarn install`.
-   Run `yarn start`.

## Unit tests

To run the unit tests, run `yarn run test`. A menu will open and you will be able to select which tests you want to run.

## Development

While you're running the server, feel free to adjust the files. The server files will be updated automatically and you'll see the changes in the browser.

## Deployment

When you commit the code will be built and deployed automatically. This git hook can be configured in `package.json`.

### Manual deployment

-   Configure your GitHub site in `package.json`.
-   Run `yarn run deploy` to deploy the site to GitHub Pages.

[Guide](https://reactgo.com/deploy-react-app-github-pages/) (We're using HashRouter instead of BrowserRouter to get GitHub routing to work)

## Demo

You can view the app [here](https://flixbox.github.io/would-you-rather/).
