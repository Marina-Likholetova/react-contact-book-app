import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import routes, { RouteWithSubRoutes } from "./routing/routes";


const navLinks = ["users", "albums"];


export default function App() {
    return (
        <Router>
            <div className="container">
                <Navbar navLinks={navLinks} />
                <main className="main">
                    <Switch>
                        {routes.map((route, index) => (
                            <RouteWithSubRoutes key={index} {...route} />
                        ))}
                    </Switch>
                </main>
            </div>
        </Router>
    );
}


