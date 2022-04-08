import React, { useEffect, useState } from 'react'

const Clock = () => {
	const [time, setTime] = useState(() => {
		return new Date().toLocaleTimeString()
	})

	// This will only be executed when the component is mounted,
	// and only AFTER the component has been rendered
	useEffect(() => {
		console.log("🕰🔨 Clock is mounted 😊 Timer started ⏲")

		const intervalId = setInterval(() => {
			// update time
			const now = new Date().toLocaleTimeString()
			console.log("tick", now)
			setTime(now)
		}, 1000)

		return () => {
			// This function will be executed when the component
			// is about to be unmounted
			console.log("🕰💥 Clock is being unmounted 😨 Stopping timer 😅")
			clearInterval(intervalId)
		}
	}, [])

	return (
		<div className="display-1 text-center">
			{time}
		</div>
	)
}

export default Clock
