import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/Root"
import Hjem from "./routes/Hjem"
import Information from "./routes/Information"
import { RouterProvider, createHashRouter } from "react-router-dom"
import EnvironmentValues from "./routes/EnvironmentValues"
import PlantManagement from "./routes/PlantManagement"

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
            {
                path: "/plantebeholdning",
                element: <PlantManagement/>
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