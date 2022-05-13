import socketio from 'socket.io-client'
import Timer from './components/Timer';
import './App.css';

const socket = socketio.connect(process.env.REACT_APP_SOCKET_URL)

const App = () => {
	return (
		<div className="container text-center">
			<Timer socket={socket} />
		</div>
	)
}

export default App;
