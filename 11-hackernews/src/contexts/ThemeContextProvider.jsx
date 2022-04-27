import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()

export const useThemeContext = () => {
	return useContext(ThemeContext)
}

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('light')

	const isDarkTheme = () => theme === 'dark'

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	const values = {
		theme,
		isDarkTheme,
		toggleTheme,
	}

	return (
		<ThemeContext.Provider value={values}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
