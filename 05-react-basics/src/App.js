import { useState } from 'react'
import './App.css';

const App = () => {
	const [msg, setMsg] = useState("Hi mom, I'm stateful")
	const [clicks, setClicks] = useState(0)
	const [posts, setPosts] = useState([
		{ title: "React Rocks 🤘🏻!", likes: 1337 },
		{ title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },
		{ title: "Got State?", likes: 3 },
	])

	const handleButtonClick = () => {
		setClicks(clicks + 1)
	}

	return (
		<div className="App">
			<h1>React Basics</h1>

			<h2>{msg}</h2>

			<p>You have clicked the button {clicks} times.</p>

			<button onClick={handleButtonClick} className="btn btn-success btn-lg">👆🏻 me!</button>

			<button onClick={ () => { setMsg('Hi dad!') } } className="btn btn-warning btn-lg">Hi dad!</button>

			<hr />

			<p>Salary per hour: SALARY &euro;</p>

			<div className="buttons">
				<div className="mb-1">
					<button
						className="btn btn-primary btn-lg"
					>Raise 1 &euro; 🤑</button>
					<button
						className="btn btn-warning btn-lg"
					>Decrease 1 &euro; 😢</button>
				</div>

				<div className="mb-1">
					<button
						className="btn btn-success btn-lg"
					>Raise 5 &euro; 🤑🤑🤑</button>
					<button
						className="btn btn-danger btn-lg"
					>Decrease 5 &euro; 😢😢😢</button>
				</div>
			</div>

			<hr />

			<h2>Posts</h2>

			<ul>
				{
					posts.map( (post, index) =>
						(
							<li key={index}>
								{post.title} ({post.likes})
							</li>
						)
					)
				}
			</ul>
		</div>
	)
}

export default App;
