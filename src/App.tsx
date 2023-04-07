import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "modules/common/components/Navbar/Navbar";
import { ThemeMode } from "entities/common/theme";
import "./App.css";

const navLinks: string[] = ["users", "albums"];

type Props = {
    theme: ThemeMode
}


const App: React.FC<Props> = ({ theme }) => {
    return (
        <div className={`container ${theme}`}>
            <Navbar navLinks={navLinks} />
            <main className="main">
                <Outlet />
            </main>
        </div>
    
    );
}

export default App;
