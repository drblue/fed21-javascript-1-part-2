import { useEffect, useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import { useNavigate, useParams } from 'react-router-dom'
import { useChatContext } from '../contexts/ChatContextProvider'

const ChatRoom = () => {
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([])
	const [users, setUsers] = useState([])
	const [connected, setConnected] = useState(false)
	const { chatUsername, socket } = useChatContext()
	const { room_id } = useParams()
	const navigate = useNavigate()
	const messageRef = useRef()

	const handleIncomingMessage = msg => {
		console.log("Received a new chat message", msg)

		// add message to chat
		setMessages(prevMessages => [ ...prevMessages, msg ])
	}

	const handleUpdateUsers = userlist => {
		console.log("Got new userlist", userlist)
		setUsers(userlist)
	}

	const handleSubmit = async e => {
		e.preventDefault()

		if (!message.length) {
			return
		}

		// construct message object
		const msg = {
			username: chatUsername,
			room: room_id,
			content: message,
			timestamp: Date.now(),
		}

		// emit chat message
		socket.emit('chat:message', msg)

		// add message to chat
		setMessages(prevMessages =>
			[
				...prevMessages,
				{ ...msg, self: true }
			]
		)

		// clear message input and refocus on input element
		setMessage('')
		messageRef.current.focus()
	}

	// connect to room when component is mounted
	useEffect(() => {
		// if no username, redirect them to the login page
		if (!chatUsername) {
			navigate('/')
		}

		// emit join request
		socket.emit('user:joined', chatUsername, room_id, status => {
			console.log(`Successfully joined ${room_id} as ${chatUsername}`, status)
			setConnected(true)
		})

		// listen for incoming messages
		socket.on('chat:message', handleIncomingMessage)

		// listen for updated userlist
		socket.on('user:list', handleUpdateUsers)

		return () => {
			console.log("Running cleanup")

			// stop listening to events
			socket.off('chat:message', handleIncomingMessage)
			socket.off('user:list', handleUpdateUsers)

			// rage-quit
			socket.emit('user:left', chatUsername, room_id)
		}
	}, [socket, room_id, chatUsername, navigate])

	useEffect(() => {
		// focus on message input
		messageRef.current && messageRef.current.focus()
	}, [])

	// display connecting message
	if (!connected) {
		return (
			<p>Stand by, connecting....</p>
		)
	}

	return (
		<div id="chat-room">
			<div id="chat">
				<h2>#{room_id}</h2>

				<div id="messages-wrapper">
					<ListGroup id="messages">
						{messages.map((message, index) => {
							const ts = new Date(message.timestamp)
							const time = ts.toLocaleTimeString()
							return (
								<ListGroup.Item key={index} className="message">
									<span className="time">{time}</span>
									<span className="user">{message.username}:</span>
									<span className="content">{message.content}</span>
								</ListGroup.Item>
							)
						}
					)}
					</ListGroup>
				</div>

				<Form onSubmit={handleSubmit} id="message-form">
					<InputGroup>
						<Form.Control
							onChange={e => setMessage(e.target.value)}
							placeholder="Say something nice..."
							ref={messageRef}
							required
							type="text"
							value={message}
						/>
						<Button variant="success" type="submit" disabled={!message.length}>Send</Button>
					</InputGroup>
				</Form>
			</div>

			<div id="users">
				<h2>Users</h2>
				<ul id="online-users">
					{Object.values(users).map((user, index) =>
						<li key={index}><span className="user-icon">🧑</span> {user}</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default ChatRoom
