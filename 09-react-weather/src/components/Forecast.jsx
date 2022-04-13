import React from 'react'
import forecastBanner from '../assets/images/forecast-banner.png'

const Forecast = () => {
	return (
		<div id="forecast">
			<div className="card">

				<img src={forecastBanner} className="card-img-top" alt="Daytime, nighttime, daytime, nighttime"/>

				<div className="card-body">
					<h5 className="card-title" id="location">
						<span id="city">CITY</span>,
						<span id="country">COUNTRY</span>
					</h5>
					<p className="temp">
						<span id="temperature">TEMP</span>
						&deg;C
					</p>
					<p className="humidity">
						<span id="humidity">HUMIDITY</span> % humidity
					</p>
					<p className="wind">
						<span id="windspeed">WIND_SPEED</span> m/s
					</p>

					{/*
					<ul className="conditions">
						${conditions.join('')}
					</ul>

					<p className="text-muted small">
						<span title="YYYY-MM-DD HH:mm:ss">
							HUMAN_TIME
						</span>
					</p>
					*/}
				</div>

			</div>
		</div>
	)
}

export default Forecast
