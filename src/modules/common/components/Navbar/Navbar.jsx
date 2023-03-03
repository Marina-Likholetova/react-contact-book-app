import { IconButton } from '@mui/material';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import themeContext from '../../context/theme';

export default function Navbar({ navLinks }) {
    const { theme, switchTheme } = useContext(themeContext);
    
    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <ul className="navbar__items--right">
                    <li>
                        <IconButton size="small" onClick={switchTheme}>
                            {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                        </IconButton>
                    </li>
                </ul>
                <ul className="navbar__items">
                    {navLinks.map((link) => (
                        <li key={Math.random()} className="navbar-item">
                            <NavLink to={link} className="navbar__link">
                                {capitalizeFirstLetter(link)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
