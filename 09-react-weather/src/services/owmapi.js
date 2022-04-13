/**
 * Open Weather Map API
 */

const API_KEY = "4e364db2279ef1ae74eb667a7f5e2f90"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

/**
 * Get current weather for a city.
 *
 * @param {string} query City to get current weather for
 */
const getCurrentWeather = async query => {
	// get weather for query from OpenWeatherMap API
	const response = await fetch(`${BASE_URL}/weather?q=${query}&units=metric&appid=${API_KEY}`)

	// convert response from JSON
	const data = await response.json()

	// fake slow api
	// await new Promise(r => setTimeout(r, 1500))

	// return current weather
	return data
}

export {
	getCurrentWeather,
}
