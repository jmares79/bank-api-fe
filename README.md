# I Soft Bet front end

The objective of this project is to provide a front end example to consume [I Soft Bet Bank API](https://github.com/jmares79/bank-api)

It's a  project bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), which provides an out of the box React scaffolding structure to quickly set up a React app.

For time and details purposes, some of the official doc was replicated here, as it's already perfectly and thoroughly explained.

I used React for the FE for the following reasons:

* It's a new, up to date & popular library supported by Facebook
* Provides an easy way to structure a web project, allowing the developer think in components, each one as atomic or wide as desired
* Allows each component to be created independently, and communicate with other ones in a straightforward way
* As each component could be thought independently, tests are easier, as there are only one thing to test
* Easier to design a site thinking in separated pieces

## Installation

Clone the repo and run `npm install` to install all the dependencies.
After having set all the project, run `npm start` or `yarn start` for start a local server in port 3000

## Folder Structure

After cloning, the project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
        Auth/
            Login.jsx
            Logout.jsx
            NotFoundRoute.jsx
        Home.jsx
        Transaction.jsx
        TransactionList.jsx
    css/
    util/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

### Components structure

The basic components for the project are the following:

* `Home.jsx` It provides the page for loading the transactions list. It performs the HTTP GET request for fetching all the data from the back end, and pass it to the transaction list component.
* `TransactionList.jsx` Wraps the each transaction item, providing a context for them
* `Transaction.jsx` It renders the single transactions, one item per transaction
* `Auth\Login.jsx` Handles the rendering and processing of the user authentication by performing a POST request to the back end for credentials.
* `Auth\Logout.jsx` Deletes the credentials from the local storage (Done like that for scoping purposes)
* `Auth\NotFoundRoute.jsx` Default route

### Purpose

The project basically fetches all the transactions from the API, passing through the top `Home` component to `TransactionList`, which itself passes to a `Transaction`.

The flow is top down, no interaction from the user in this stage.

when accesing the page, the user is first asked for credentials, then, if valid, the API returns an access token which is saved in the local storage of the client in a hash table.

When performing any private operation, the system first checks that the access is present and if it is, allows the user to continue.

```
This is not the suitable way of doing in production, it was only did this way for timing and scoping constraints
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Adding a Stylesheet

This project setup uses [Webpack](https://webpack.js.org/) for handling all assets. Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file**:

### `Button.css`

```css
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

## Post-Processing CSS

This project setup minifies your CSS and adds vendor prefixes to it automatically through [Autoprefixer](https://github.com/postcss/autoprefixer) so you don’t need to worry about it.

For example, this:

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

becomes this:

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```

If you need to disable autoprefixing for some reason, [follow this section](https://github.com/postcss/autoprefixer#disabling).

## Adding Bootstrap

You don’t have to use [React Bootstrap](https://react-bootstrap.github.io) together with React but it is a popular library for integrating Bootstrap with React apps. If you need it, you can integrate it with Create React App by following these steps:

Install React Bootstrap and Bootstrap from npm. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:

```sh
npm install --save react-bootstrap bootstrap@3
```

Alternatively you may use `yarn`:

```sh
yarn add react-bootstrap bootstrap@3
```

Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your ```src/index.js``` file:

```js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
```

Import required React Bootstrap components within ```src/App.js``` file or your custom component files:

```js
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
```

Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method. Here is an example [`App.js`](https://gist.githubusercontent.com/gaearon/85d8c067f6af1e56277c82d19fd4da7b/raw/6158dd991b67284e9fc8d70b9d973efe87659d72/App.js) redone using React Bootstrap.

## Tests

Test were included as a way to show how to primarily test some components.

Tests could be as detailed as possible, and for scoping reasons, only 2 simple tests were provided.

* Transaction.test.js
* TransactionList.test.js

Both tests the correct render of the component, via a `describe` and `it` statements.

Basically they render the component with mock data and checks that the elements were rendered correctly both in lenght and type.

For running the test execute `yarn test`


