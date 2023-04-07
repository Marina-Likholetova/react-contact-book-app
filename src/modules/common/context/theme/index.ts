import { createContext } from "react";
import { Theme } from "entities/common/theme";



const themeContext = createContext<Theme>({theme: "light"});

export default themeContext;
