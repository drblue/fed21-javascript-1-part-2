import React from 'react'
import forecastBanner from '../assets/images/forecast-banner.png'

const Forecast = ({ data }) => {
	if (data.cod !== 200) {
		return (
			<div className="alert alert-warning">
				{data.message}
			</div>
		)
	}

	return (
		<div id="forecast">
			<div className="card">

				<img src={forecastBanner} className="card-img-top" alt="Daytime, nighttime, daytime, nighttime"/>

				<div className="card-body">
					<h5 className="card-title" id="location">
						<span id="city">{data.name}</span>,
						<span id="country">{data.sys.country}</span>
					</h5>
					<p className="temp">
						<span id="temperature">{data.main.temp}</span>
						&deg;C
					</p>
					<p className="humidity">
						<span id="humidity">{data.main.humidity}</span> % humidity
					</p>
					<p className="wind">
						<span id="windspeed">{data.wind.speed}</span> m/s
					</p>

					<ul className="conditions">
						{data.weather.map(condition => (
							<li key={condition.id}>
								<img
									src={`https://openweathermap.org/img/wn/${condition.icon}@2x.png`}
									title={condition.main}
									alt={condition.main}
								/>
								{condition.description}
							</li>
						))}
					</ul>

					{/*
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
