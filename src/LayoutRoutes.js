import React from "react";
import { Outlet, Link } from "react-router-dom"

function Layout() {

    return (
        <div>
            <h1>Layout</h1>
            <ul>
                <Link to="/Sorting"><li>Sorting</li></Link>
            </ul>
            <Outlet />

        </div>
    )
}
export default Layout;