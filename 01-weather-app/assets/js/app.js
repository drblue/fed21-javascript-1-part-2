/**
 * ☔️.
 *
 */

const renderCurrentWeather = data => {
	document.querySelector('#forecast').innerHTML = `
		<img src="assets/images/forecast-banner.png" class="card-img-top">
		<div class="card-body">
			<h5 class="card-title" id="location">
				<span id="city">${data.name}</span>,
				<span id="country">${data.sys.country}</span>
			</h5>
			<p class="temp">
				<span id="temperature">${data.main.temp}</span>
				&deg;C
			</p>
			<p class="humidity">
				<span id="humidity">${data.main.humidity}</span>
				&percnt; humidity
			</p>
			<p class="wind">
				<span id="windspeed">${data.wind.speed}</span>
				m/s
			</p>
		</div>
	`
}

document.querySelector('#search-form').addEventListener('submit', async e => {
	e.preventDefault()

	const query = document.querySelector('#query').value.trim()

	if (query.length < 3) {
		/**
		 * @todo show error search too short
		 */
		alert("Please enter at least 3 chars")
		return
	}

	// do search
	console.log("Searching for city:", query)
	const data = await getCurrentWeather(query)

	// render weather
	renderCurrentWeather(data)
})
