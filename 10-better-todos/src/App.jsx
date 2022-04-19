import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import TodosPage from './pages/TodosPage'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {

	return (
		<Container id="App">

			<Routes>
				<Route path="/" element={<p>Welcome home</p>} />
				<Route path="/todos" element={<TodosPage />} />
			</Routes>

		</Container>
	)
}

export default App;
