import React, { useState } from 'react'

const SearchCity = ({ onSearch }) => {
	const [city, setCity] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		// pass city to parent
		onSearch(city)

		// clear city state
		setCity('')
	}

	return (
		<div id="search-wrapper">
			<form id="search-form" onSubmit={handleSubmit}>
				<div className="input-group">
					<input
						type="text"
						onChange={e => setCity(e.target.value)}
						value={city}
						className="form-control"
						placeholder="Enter city to search for" aria-label="City" aria-details="Search for city to show current weather for."
					/>

					<button
						type="submit"
						disabled={city.length < 3}
						className="btn btn-success"
					>🔍</button>
				</div>
			</form>
		</div>
	)
}

export default SearchCity
