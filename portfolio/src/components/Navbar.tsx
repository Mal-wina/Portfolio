import { useState } from "react";

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
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>

            <button>Let's Connect</button>
        </nav>
    );
}

export default Navbar;