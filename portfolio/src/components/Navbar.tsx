import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <h2>MC.</h2>

            <button className="menu-button" 
                    onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "×" : "☰"}
            </button>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>

            <button>Let's Connect</button>
        </nav>
    );
}

export default Navbar;