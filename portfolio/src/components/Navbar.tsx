import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <h2>MC.</h2>

            <div className="navbar">
            <button className="menu-button" 
                    onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "×" : "☰"}
            </button>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <a href="#home">Home</a>
                </li>
                 <li>
                    <a href="#about">About</a>
                </li>
                 <li>
                    <a href="#projects">Projects</a>
                </li>
                 <li>
                    <a href="#skills">Skills</a>
                </li>
                 <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
           </div> 
            <button className="connect-button">Let's Connect</button>
        </nav>
    );
}

export default Navbar;