import React, { useState } from 'react'

const Timer = () => {
	const [timerId, setTimerId] = useState()
	const [timeElapsed, setTimeElapsed] = useState(0)

	const startTimer = () => {
		const intervalId = setInterval(() => {
			setTimeElapsed(prevTimeElapsed => prevTimeElapsed + 1)
		}, 1000);

		setTimerId(intervalId)
	}

	const stopTimer = () => {
		clearInterval(timerId)
		setTimerId(null)
	}

	const resetTimer = () => {
		setTimeElapsed(0)
	}

	return (
		<div className="display-1 text-center">
			<div className="time-elapsed">
				<pre>{timeElapsed}</pre>
			</div>

			<div className="btn-group" role="group">
				<button onClick={startTimer} disabled={timerId} className="btn btn-success">Start</button>
				<button onClick={stopTimer} disabled={!timerId} className="btn btn-warning">Stop</button>
				<button onClick={resetTimer} className="btn btn-danger">Reset</button>
			</div>
		</div>
	)
}

export default Timer
