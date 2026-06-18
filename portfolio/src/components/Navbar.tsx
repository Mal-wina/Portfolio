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

            <div className="nav-menu" onMouseLeave={() => setMenuOpen(false)}>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <a href="/#home" onClick={() => setMenuOpen(false)}>Home</a>
                </li>
                 <li>
                    <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
                </li>
                 <li>
                    <a href="/#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                </li>
                 <li>
                    <a href="/#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                </li>
                 <li>
                    <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </li>
            </ul>
           </div> 
             <a href="/#contact" className="btn">
            Let's connect
          </a>
        </nav>
    );
}

export default Navbar;