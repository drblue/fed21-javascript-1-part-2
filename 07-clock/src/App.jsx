import { useEffect, useState } from 'react'
import './App.css';

const App = () => {
	const [time, setTime] = useState(() => {
		return new Date().toLocaleTimeString()
	})

	// This will only be executed when the component is mounted,
	// and only AFTER the component has been rendered
	useEffect(() => {
		console.log("Starting timer...")

		setInterval(() => {
			// update time
			const now = new Date().toLocaleTimeString()
			console.log("tick", now)
			setTime(now)
		}, 1000)
	}, [])

	return (
		<div className="container">
			<div className="display-1 text-center">
				{time}
			</div>
		</div>
	)
}

export default App;
