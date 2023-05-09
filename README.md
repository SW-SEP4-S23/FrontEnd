# FrontEnd

## Description

OPS: This is gonna happen next time main is updated.
The application can be found on the following link: https://frontend.github.io/green-house-app/

This is a react application that is used to display data from the green house api.

## Development

### Running the Dev Container

OPS: This works but you everything takes 10 min to do so until this is fixed use the section on running the app and the tests outside the container.

This devcontainer will run your tests in a container, and will also run the application in a container.

1. Open the project in VS Code.

2. Open a new VC Code Terminal (CTRL + SHIFT + `). This will open a terminal in the context of the project.

3. Run the command: `docker-compose up --build`.

4. The application should now be available at `localhost:3000`. It will reflect changes made to the code.

5. To run your tests in the container, open up a new VC Code Terminal and run the command: `docker exec -it frontend-app-1 sh -c "npm run test:dev"`. These tests will run whenever a change is made in the code.

### Running tests

```bash
# unit tests
$ npm run test

```

### Running the application

> **_NOTE_**: If you want to run the application in a container, see the section on running the dev container.

```bash

$ npm start

```

## Architecture
### Components
Components are the building blocks of the application. They are the smallest unit of code that can be reused. Components are organized into a tree structure, where each component can have children components. Components can be either functional or class based. Functional components are preferred, as they are easier to test and reason about.

### Containers

Containers are components that are connected to the redux store. They are responsible for passing data to components, and dispatching actions to the store. Containers should not contain any logic, and should only be used to pass data to components.

### Routes

Pages are the top level components of the application. They are responsible for fetching data from the server, and passing it to containers. Pages should not contain any logic, and should only be used to pass data to containers.

### Services

Services are used to make requests to the server. They are responsible for fetching data from the server, and returning it to the caller. Services should not contain any logic, and should only be used to fetch data from the server.

### Utils

Utils are used to perform common tasks. They are responsible for performing common tasks, such as formatting dates, and converting strings to numbers. Utils should not contain any logic, and should only be used to perform common tasks.

### Tests

Tests are used to ensure that the application works as expected. Tests are written using the Jest testing framework using the Arrange, Act, Assert pattern. In addition the jsdom framework is used to enable testing of a component's DOM.

### Linting

Linting is used to ensure that the code is formatted correctly. Linting is performed using the ESLint framework.









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
