'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextProps {
    theme: string,
    toggleTheme: () => void
}

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState('')

    const localStorageKey = '@medithoughts'

    function toggleTheme() {
        if(theme === 'light' || theme === '') {
            setTheme('dark')
            localStorage.setItem(localStorageKey, 'dark')
        } else if(theme === 'dark') {
            setTheme('light')
            localStorage.setItem(localStorageKey, 'light')
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem(localStorageKey)
        if(savedTheme) {
            setTheme(savedTheme)
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)