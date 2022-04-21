import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<h1>Welcome to Hacker News!</h1>

			<Button variant="primary" as={Link} to="/search">Use the Search, you must</Button>
		</>
	)
}

export default HomePage
