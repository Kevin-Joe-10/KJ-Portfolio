import { useState } from "react";
import { profile } from "../data.js";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">{profile.name}</a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav className={open ? "nav-links show" : "nav-links"}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
