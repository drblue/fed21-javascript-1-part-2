import { createContext, useContext, useState } from 'react'
import classNames from 'classnames'

export const ThemeContext = createContext()

export const useThemeContext = () => {
	return useContext(ThemeContext)
}

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('light')

	const getStyle = () => {
		return classNames({
			'bg-dark': isDarkTheme(),
			'text-light': isDarkTheme(),
		})
	}

	const isDarkTheme = () => theme === 'dark'

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	const values = {
		theme,
		getStyle,
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
