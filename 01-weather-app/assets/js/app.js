/**
 * ☔️.
 *
 */

const renderAlert = (msg, severity) => {
	document.querySelector('#forecast').innerHTML =
		`<div class="alert alert-${severity}">${msg}</div>`
}

const renderNotice = msg => renderAlert(msg, "info")

const renderWarning = msg => renderAlert(msg, "warning")

const renderError = msg => renderAlert(msg, "danger")

const renderCurrentWeather = data => {
	// render weather conditions
	const conditions = data.weather.map(condition =>
		`<li><img src="https://openweathermap.org/img/wn/${condition.icon}@2x.png" title="${condition.main}">${condition.description}</li>`
	)

	// output weather data
	document.querySelector('#forecast').innerHTML = `
		<div class="card">
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
				<ul class="conditions">
					${conditions.join('')}
				</ul>
			</div>
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
		renderNotice("Please enter at least 3 chars")
		return
	}

	// hide old forecast anad show spinner
	document.querySelector('#spinner').classList.remove('hide')
	document.querySelector('#forecast').classList.add('hide')

	// do search
	const data = await getCurrentWeather(query)

	// hide spinner
	document.querySelector('#spinner').classList.add('hide')
	document.querySelector('#forecast').classList.remove('hide')

	// check if city was found
	if (data.cod == 200) {
		// render weather
		renderCurrentWeather(data)
	} else if (data.cod == 404) {
		// render alert
		renderWarning("No such city was found")
	} else {
		// render generic alert
		renderError(data.message)
	}
})
