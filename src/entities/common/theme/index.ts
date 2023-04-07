import { PaletteMode } from "@mui/material";

export type ThemeMode = PaletteMode;

export type Theme = {
    theme: ThemeMode;
    switchTheme?: () => void;
}