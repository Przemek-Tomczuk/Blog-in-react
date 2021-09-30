import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles.css"
import{NavbarData} from "./NavbarData"

export default function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbarList">
            {NavbarData.map((val, key) => {
                return (
                    <Link to={val.link}>
                    <li key={key} className="row">
                            <div className="title">{val.title}</div>
                    </li>
                    </Link>
                )
            })}
            </ul>
        </div>
    )
}
