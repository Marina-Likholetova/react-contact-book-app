import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const navLinks = ["users", "albums"];


export default function App() {
    return (
        <div className="container">
            <Navbar navLinks={navLinks} />
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
}
