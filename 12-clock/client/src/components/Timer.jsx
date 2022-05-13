import { useEffect, useState } from 'react'

const Timer = ({ socket }) => {
	const [timerId, setTimerId] = useState()
	const [timeElapsed, setTimeElapsed] = useState(0)

	// Ready, set, go!
	// (emit start clock to server)
	const handleStartTimerClick = () => {
		console.log("Emitting 'clock:start' event to server")
		socket.emit('clock:start')
	}

	// (emit stop clock to server)
	const handleStopTimerClick = () => {
		console.log("Emitting 'clock:stop' event to server")
		socket.emit('clock:stop')
	}

	// (emit reset clock to server)
	const handleResetTimerClick = () => {
		console.log("Emitting 'clock:reset' event to server")
		socket.emit('clock:reset')
	}

	const onStartTimer = () => {
		console.log("Starting timer!")

		const intervalId = setInterval(() => {
			setTimeElapsed(prevTimeElapsed => prevTimeElapsed + 1)
		}, 10);

		setTimerId(intervalId)
	}

	const onStopTimer = () => {
		console.log("Stopping timer!")

		clearInterval(timerId)
		setTimerId(null)
	}

	const onResetTimer = () => {
		console.log("Reset timer!")

		setTimeElapsed(0)
	}

	useEffect(() => {
		// listen for 'clock:start' event
		socket.on('clock:start', onStartTimer)

		// listen for 'clock:stop' event
		socket.on('clock:stop', onStopTimer)

		// listen for 'clock:reset' event
		socket.on('clock:reset', onResetTimer)
	}, [socket])

	const seconds = Math.floor(timeElapsed / 100).toString().padStart(2, 0)
	const hundredths = (timeElapsed % 100).toString().padStart(2, 0)

	return (
		<div className="display-1 text-center">
			<div className="time-elapsed">
				<pre>{seconds}.{hundredths}</pre>
			</div>

			<div className="btn-group" role="group">
				<button onClick={handleStartTimerClick} disabled={timerId} className="btn btn-success">Start</button>
				<button onClick={handleStopTimerClick} disabled={!timerId} className="btn btn-warning">Stop</button>
				<button onClick={handleResetTimerClick} className="btn btn-danger">Reset</button>
			</div>
		</div>
	)
}

export default Timer
