import "./navbar.css"
import{NavbarData} from "./NavbarData"

export default function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbarList">
            {NavbarData.map((val, key) => {
                return (
                    <li key={key} className="row" onClick={() => {window.location.pathname =val.link}}>
                        <div className="title">{val.title}</div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
