import "../css/styles.css"
import { Link, Outlet } from "react-router-dom"

export default function App() {
    return (
        <>
            <div className="navBar">
                <nav>
                    <Link to="/">Hjem</Link>
                    <Link to="/information">Informationer</Link>
                </nav>
            </div>
            <Outlet />
        </>
    )
}