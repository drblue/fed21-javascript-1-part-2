import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import TodosAPI from '../services/TodosAPI'

const TodoPage = () => {
	const [todo, setTodo] = useState()
	const { id } = useParams()

	const getTodo = async (id) => {
		const data = await TodosAPI.getTodo(id)
		setTodo(data)
	}

	// Toggle the completed status of a todo in the api
	const toggleTodo = async () => {
		await TodosAPI.updateTodo(id, {
			completed: !todo.completed
		})
		getTodo(id)
	}

	useEffect(() => {
		getTodo(id)
	}, [id])

	if (!todo) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<h1>{todo.title}</h1>

			<p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Not completed'}</p>

			<Button variant="success" onClick={toggleTodo}>Toggle</Button>
			<Button variant="warning" as={Link} to={`/todos/${id}/edit`}>Edit</Button>
		</div>
	)
}

export default TodoPage
