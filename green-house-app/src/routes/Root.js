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
                            <img id="logo-image" src={logo} alt="Logo Image" />
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        -
                        -
                        -
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

            {/*             <div className="navBar">
                <nav>
                    <Link to="/">Hjem</Link>
                    <Link to="/information">Informationer</Link>
                </nav>
            </div> */}
            <Outlet />
        </>
    )
}