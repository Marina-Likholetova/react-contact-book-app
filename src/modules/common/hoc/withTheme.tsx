import React, { useState, ComponentType } from "react";
import { ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeMode } from "entities/common/theme";
import Theme from "../context/theme";


export default function withTheme<P extends object>(Component: ComponentType<P>) {
    const WithTheme: React.FC<object> = (props) => {
        const [theme, setTheme] = useState<ThemeMode>('light');
        const switchTheme = (): void => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
        };

        const themeStyle = createTheme({
            palette: {
                mode: theme,
            },
        });

        return (
            <Theme.Provider value={{ theme, switchTheme }}>
                <ThemeProvider theme={themeStyle}>
                    <CssBaseline />
                    <Component theme={theme} {...(props as P)} />
                </ThemeProvider>
            </Theme.Provider>
        );
    };

    return WithTheme;
}
