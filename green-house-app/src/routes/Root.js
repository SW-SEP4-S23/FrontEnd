import "../css/styles.css"
import "../css/navbar.css"
import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import logo from "../images/logo.PNG"

export default function App() {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img id="logo-image" src={logo} alt="Firm Logo" />
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        - {/*Mangler et dropdown logo her*/}
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <Link to="/">Hjem</Link>
                            </li>
                            <li>
                                <Link to="/information">Informationer</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}