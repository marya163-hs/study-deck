import { createContext, useState, type ReactNode } from 'react';

type Theme = "dark" | "light"

type ThemeContextType = {
    theme: Theme 
    toggleTheme: () => void
}

// createContext makes the shared box other components can read from this box
export const ThemeContext = createContext<ThemeContextType>({
    theme:"dark",
    toggleTheme: () => {},
})

// Provider wraps our app and supplies the theme + a way to change it
export function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState<Theme>("dark")

    // flip between dark and light
    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    // everything inside <ThemeProvider> can now read { theme, toggleTheme }
    // children is whatever we wrap inside this provider

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}