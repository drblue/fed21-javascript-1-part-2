import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'
import TodosAPI from '../services/TodosAPI'

const TodoPage = () => {
	const [todo, setTodo] = useState()
	const { id } = useParams()

	useEffect(() => {
		const getTodo = async () => {
			const data = await TodosAPI.getTodo(id)
			setTodo(data)
		}
		getTodo()
	}, [id])

	if (!todo) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<h1>{todo.title}</h1>

			<p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Not completed'}</p>

			<Button variant="success">Toggle</Button>
			<Button variant="warning">Edit</Button>
		</div>
	)
}

export default TodoPage
