import { ReactNode, createContext, useEffect, useState, useContext } from "react";

const STORAGE_KEY = 'themeContextKey';

type ThemeContext = {
    theme: string
    setTheme: (newTheme: string) => void
}

export const ThemeContext = createContext<ThemeContext | null>(null)

type props = {
    children: ReactNode
}

export const ThemeProvider = ({ children }: props) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(STORAGE_KEY) || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext)