import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'ligth',
    darkTheme: () => { },
    ligthTheme: () => { },
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}