import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Login from './pages/Login'
import ChatRoom from './pages/ChatRoom'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'

const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/rooms/:room_id" element={<ChatRoom />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
