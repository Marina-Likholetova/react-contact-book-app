import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "modules/common/components/Navbar/Navbar";

const navLinks = ["users", "albums"];


export default function App({ theme }) {
    return (
        <div className={`container ${theme}`}>
            <Navbar navLinks={navLinks} />
                <main className="main">
                    <Outlet />
                </main>
        </div>
    
    );
}
