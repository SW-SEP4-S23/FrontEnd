# FrontEnd

## Intro

The latest release of the frontend application can be found on the following link:  
https://sw-sep4-s23.github.io/FrontEnd/

This is a react application that is used to display data from the green house api.

### Table of contents

[Development](#Development)
1. [Running the Dev Container](#running-the-dev-container)
2. [Developing locally](#developing-locally)
3. [Workflow](#workflow)


[Architecture](#architecture)
1. [Structure](#structure)
2. [Components](#components)
3. [Container components](#container-components)
4. [Routes](#routes)
5. [Services](#services)
6. [Utils](#utils)
7. [Tests](#tests)

[Libraries and frameworks](#libraries-and-frameworks)  
[Authors](#authors)


## Development
> **Note:** It is recommended to use the container for development to ensure a consistent environment.   
> If you wish to develop locally, please refer to the [Developing locally](#developing-locally) section.
### Running the Dev Container

The container uses Docker to setup and run the application in development mode.  
This means that the application will be available at `localhost:3000`, and will reflect changes made to the code. In addition you can run your tests in the container.

>**Important: make sure you have WSL on your machine have Docker installed and running!**

1. Open the project in VS Code.

2. Open a new Terminal (CTRL + SHIFT + `). This will open a terminal in the context of the project.

3. Run the following command to update dependencies:

```bash
$ npm install --include=dev
```

4. Run the command:

```bash
$ npm run docker
```

5. The application should now be available at `localhost:3000`.

6. To run your tests in the container, run the command: 

```bash
$ npm run docker:test
```	
### Developing locally
Make sure to install dependencies in case some are missing or outdated.

```bash
$ npm install --include=dev
```

If you wish to run tests locally, you can do so by running the following command:
```bash
$ npm run test
```

### Running the application
If you wish to run the application locally, you can do so by running the following command:

```bash
$ npm start
```
### Workflow
#### Github Workflow
To see the organisations guidelines on workflow, please refer to [SW-SEP4-S23/overview](https://github.com/SW-SEP4-S23)

#### Github Actions
Git actions are used to automate the development and deployment process. The following actions are used:

- **Deploy** - This action is triggered when main is pushed to and builds and deploys the application to github pages.
- **CI** - This action is triggered when a pull request is made and builds the application in a custom container and runs tests.

## Architecture
The application is built using React.  
React applications are structured using a component-based architecture, where the user interface is divided into reusable and independent components. This promotes reusability, separation of concerns, and a clear flow of data, leading to more maintainable and efficient code.

To read more about React, visit the official documentation:
[React](https://reactjs.org/)

### Structure
Below is a diagram of the application's overall structure.   

> **Note:** The diagram is not complete, and only shows the most important parts.

```
src/
├─ components/
│  ├─ componentname.js
│  ├─ componentname.css
├─ routes/
├─ services/
├─ utils/
├─ tests/
```
More information can be found in the following sections.

### Components
Components are the building blocks of the application. They are responsible for displaying data and passing user input to its parent.

This example shows a functional component that displays a table with datapoints:

```javascript
import "../css/Data.css"
import "../css/styles.css"

function DataTable({ data, dataName }) {
    return (
        <>
            <table>
                <tbody>

                    <tr>
                        <th>Dato</th>
                        <th>Tid</th>
                        <th>{dataName} værdi</th>
                    </tr>
                    {data !== undefined && data.length !== 0 ? (data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.timestamp.split("T")[0]}</td>
                                <td>{item.timestamp.split("T")[1].replace("Z", "").split(":").slice(0, 2).join(":")}</td>
                                <td>{item[dataName]}</td>
                            </tr>
                        )
                    })) : <tr><td>No data available.</td></tr>}
                </tbody>
            </table>
        </>
    )
}

export default DataTable

```

### Container components

The container components are the parent components and are responsible for passing data to components, handling user input logic and using services to fetch data.

This example shows a container that passes data to a DataTable component and handles user input from the TimeSelect component:
```javascript
import React, { useState } from "react"
import TimeSelect from "./TimeSelect";
import DataTable from "./DataTable";
import DataGraph from "./DataGraph";

function DataContainer({ data, dataName, setEndDate }) {
    const [displayType, setDisplayType] = useState("graf");
    return (
        <>
            <div data-testid={`${dataName}-container`} className="displayContainer">
                <div className="displayToggle" >
                    <button id={`grafbutton`} className={`databutton ` + (displayType === "graf" ? "highlighted" : "")} onClick={() => setDisplayType("graf")}>Graf</button>
                    <button id={`tablebutton`} className={`databutton ` + (displayType === "table" ? "highlighted" : "")} onClick={() => setDisplayType("table")}>Tabel</button>
                </div>
                <TimeSelect setEndDate={setEndDate} />
                {displayType === "table" ? <DataTable data={data} dataName={dataName} /> : <DataGraph data={data} dataName={dataName} />}
            </div>
        </>
    )
} export default DataContainer
```

### Routes
Routes are the top level components of the application and work the same as containers components. In addition the routes are responsible for routing the user to the correct page. 

This example shows how routes are used to direct the user to the correct page:
```javascript
import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/Root"
import Hjem from "./routes/Hjem"
import Information from "./routes/Information"
import { RouterProvider, createHashRouter } from "react-router-dom"
import EnvironmentValues from "./routes/EnvironmentValues"

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Hjem />,
            },
            {
                path: "/information",
                element: <Information />,
            },
            {
                path: "/miljøværdier",
                element: <EnvironmentValues />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
```

### Services
Services are used to make requests to the server. They are responsible for fetching data from the server, and returning it to the caller. Services should not contain any logic, and should only be used to fetch data from the server.

This example shows a service that fetches data from the server:

`src/services/fetchData.js`
```javascript
async function fetchData(dataName, startDate, endDate, setData) {
    const response = await fetch(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    if (response.ok) {
        setData(jsonData)
    }
    else {
      alert("Server fejl, prøv igen senere.")
        setData([])
    }
  } export default fetchData
```

### Utils

Utils are responsible for performing common tasks, such as formatting dates, and converting strings to numbers. Utils should not contain any logic, and should only be used to perform common tasks.

This example shows a util that converts a date in a IOS format to a human readable format:

```javascript
export default function convertTimestamp(timestamp) {

        let date = new Date(timestamp);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();

        return `${day < 10 ? "0" + day : day}.${month < 10 ? "0" + month : month} ${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}`;
}
```

### Tests

Tests are used to ensure that the application works as expected. Tests are written using the Jest testing framework. In addition the React Testing Library is used to enable testing of a component's DOM and trigger user input.

This example shows a test suite that tests that the component renders correctly with the data provided:

```javascript
describe('DataTable', () => {
  const dataName = 'temperature';
  const data = [
    { id: 1, timestamp: '2023-05-09T12:34:56Z', [dataName]: 123 },
    { id: 2, timestamp: '2023-05-09T12:45:06Z', [dataName]: 456 },
  ];

  it('renders without crashing', () => {
    render(<DataTable data={data} dataName={dataName} />);
  });

  it('displays table headers correctly', () => {
    const { getByText } = render(<DataTable data={data} dataName={dataName} />);
    expect(getByText('Dato')).toBeInTheDocument();
    expect(getByText('Tid')).toBeInTheDocument();
    expect(getByText(dataNameToLabel(dataName))).toBeInTheDocument();
  });

  it('displays data rows correctly', () => {
    const { queryAllByText } = render(<DataTable data={data} dataName={dataName} />);
    expect(queryAllByText('2023-05-09')[0]).toBeInTheDocument();
    expect(queryAllByText('12:34')[0]).toBeInTheDocument();
    expect(queryAllByText('123')[0]).toBeInTheDocument();
    expect(queryAllByText('2023-05-09')[0]).toBeInTheDocument();
    expect(queryAllByText('12:45')[0]).toBeInTheDocument();
    expect(queryAllByText('456')[0]).toBeInTheDocument();
  });

  it('displays a message when there is no data', () => {
    const { getByText } = render(<DataTable data={[]} dataName={dataName} />);
    expect(getByText('Ingen data at vise.')).toBeInTheDocument();
  });
});
```
## Libraries and frameworks

> **Note:** This is not a complete list of all libraries and frameworks used. Only the most important ones are listed.

- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Babel](https://babeljs.io/)


## Authors

### The best Frontend team to exist:  

**[Carina](https://github.com/CarinaViborg)**   
**[Merethe](https://github.com/merethel)**   
**[Pernille](https://github.com/pernillebarbesgaard)**  
**[Jakob](https://github.com/Sorekjen)**  