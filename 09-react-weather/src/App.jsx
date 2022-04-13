import { useEffect, useState } from 'react'
import Forecast from './components/Forecast'
import SearchCity from './components/SearchCity'
import { getCurrentWeather } from './services/owmapi'
import './App.css'

const App = () => {
	return (
		<div id="app" className="container">
			<SearchCity />

			<Forecast />
		</div>
	)
}

export default App;
