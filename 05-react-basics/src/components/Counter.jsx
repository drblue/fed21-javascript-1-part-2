import React, { useState } from 'react'

const Counter = () => {
	const [clicks, setClicks] = useState(0)

	const handleButtonClick = () => {
		setClicks(prevClicks => prevClicks + 1)
	}

	return (
		<div className="counter">
			<button onClick={handleButtonClick} className="btn btn-success btn-lg">You have clicked me {clicks} times</button>
		</div>
	)
}

export default Counter
