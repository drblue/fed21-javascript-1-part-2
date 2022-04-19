import Container from 'react-bootstrap/Container'
import { Link, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import TodosPage from './pages/TodosPage'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container>
				<Routes>
					<Route path="/" element={(
						<p>Welcome home. Go to <Link to="/todos">todos</Link>.</p>
					)} />
					<Route path="/todos" element={<TodosPage />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App;
