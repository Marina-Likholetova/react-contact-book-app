import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "../context/theme/";

export default function withTheme(Component) {
    const WithTheme = (props) => {
        const [theme, setTheme] = useState("light");
        const switchTheme = () => {
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
                    <Component theme={theme} {...props} />
                </ThemeProvider>
            </Theme.Provider>
        );
    };

    return WithTheme;
}
