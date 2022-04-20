import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<h1>Welcome to Better Todos!</h1>

			<p>This link does not exist: <Link to="/not-found">Click here</Link></p>
		</>
	)
}

export default HomePage
