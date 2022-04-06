import { useState } from 'react'
import Salary from './components/Salary'
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
		setClicks(prevClicks => prevClicks + 1)
	}

	const addLike = (post) => {
		post.likes++
		setPosts([...posts])
	}

	const deletePost = (clickedPost) => {
		setPosts(posts.filter(post => post !== clickedPost))
	}

	return (
		<div className="App">
			<h1>React Basics</h1>

			<h2>{msg}</h2>

			<p>You have clicked the button {clicks} times.</p>

			<button onClick={handleButtonClick} className="btn btn-success btn-lg">👆🏻 me!</button>

			<button onClick={ () => { setMsg('Hi dad!') } } className="btn btn-warning btn-lg">Hi dad!</button>

			<hr />

			<Salary />

			<hr />

			<h2>Posts</h2>

			<ul>
				{
					posts.map( (post, index) =>
						(
							<li key={index}>
								{post.title} ({post.likes})
								<button
									className="btn btn-success btn-sm"
									onClick={() => addLike(post)}
								>👍🏻</button>

								<button
									className="btn btn-danger btn-sm"
									onClick={() => deletePost(post)}
								>🗑</button>
							</li>
						)
					)
				}
			</ul>
		</div>
	)
}

export default App;
