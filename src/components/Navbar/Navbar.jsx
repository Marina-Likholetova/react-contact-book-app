import React from 'react';
import { NavLink } from 'react-router-dom';
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

export default function Navbar({ navLinks }) {
  return (
      <nav className="navbar">
          <ul className="navbar__items">
              {navLinks.map((link) => (
                  <li key={Math.random()} className="navbar-item">
                      <NavLink to={link} className="navbar__link">
                          {capitalizeFirstLetter(link)}
                      </NavLink>
                  </li>
              ))}
          </ul>
      </nav>
  );
}
