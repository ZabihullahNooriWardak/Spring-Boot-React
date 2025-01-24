import React from "react";
import { Link } from "react-router-dom";
export function NavBar(){

    return (
        <>
        <nav>
            <ul>
                <li><Link to="/Employees">Employees</Link></li>
            </ul>
        </nav>
        </>
    )
}