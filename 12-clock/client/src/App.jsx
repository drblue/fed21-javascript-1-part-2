import socketio from 'socket.io-client'
import Timer from './components/Timer';
import './App.css';

const App = () => {
	const socket = socketio.connect(process.env.REACT_APP_SOCKET_URL)

	socket.emit('hewwo')

	return (
		<div className="container text-center">
			<Timer />
		</div>
	)
}

export default App;
