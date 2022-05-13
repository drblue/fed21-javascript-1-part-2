import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { useChatContext } from '../contexts/ChatContextProvider'

const Login = () => {
	const [username, setUsername] = useState('')
	const [room, setRoom] = useState()
	const [roomlist, setRoomlist] = useState([])
	const { setChatUsername, socket } = useChatContext()
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()

		// set chat username
		setChatUsername(username)

		// redirect to chat room
		navigate(`/rooms/${room}`)
	}

	// as soon as the component is mounted, request room list
	useEffect(() => {
		console.log("Requesting room list from server...")

		socket.emit('get-room-list', rooms => {
			setRoomlist(rooms)
		})
	}, [socket])

	return (
		<div id="login">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="username">
					<Form.Label>Username</Form.Label>
					<Form.Control
						onChange={e => setUsername(e.target.value)}
						placeholder="Enter your username"
						required
						type="text"
						value={username}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="room">
					<Form.Label>Room</Form.Label>
					<Form.Select
						onChange={e => setRoom(e.target.value)}
						required
						value={room}
					>
						{roomlist.length === 0 && <option disabled>Loading...</option>}
						{roomlist.length && (
							<>
								<option value="">Select a room to join</option>
								{roomlist.map(r =>
									<option key={r.id} value={r.id}>{r.name}</option>
								)}
							</>
						)}
					</Form.Select>
				</Form.Group>

				<div className="d-flex justify-content-between">
					<Button variant="success" type="submit" className="w-100" disabled={!username || !room}>Join</Button>
				</div>
			</Form>
		</div>
	)
}

export default Login
