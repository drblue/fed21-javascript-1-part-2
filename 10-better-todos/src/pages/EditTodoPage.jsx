import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from 'react-router-dom'
import TodosAPI from '../services/TodosAPI'

const EditTodoPage = () => {
	const [todo, setTodo] = useState()
	const [newTitle, setNewTitle] = useState("")
	const { id } = useParams()
	const navigate = useNavigate()

	const getTodo = async (id) => {
		const data = await TodosAPI.getTodo(id)
		setTodo(data)
		setNewTitle(data.title)
	}

	const handleSubmit = async e => {
		e.preventDefault()

		// send request to API to update title for this todo with the value in the input field
		await TodosAPI.updateTodo(id, {
			title: newTitle,
		})

		// redirect user to /todos/:id
		navigate(`/todos/${id}`)
	}

	useEffect(() => {
		getTodo(id)
	}, [id])

	if (!todo) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<h1>Edit: {todo.title}</h1>

			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="newTitle">
					<Form.Label>Title</Form.Label>
					<Form.Control
						onChange={e => setNewTitle(e.target.value)}
						placeholder="Enter title"
						required
						type="text"
						value={newTitle}
					/>
				</Form.Group>

				<div className="d-flex justify-content-between">
					<Button variant="success" type="submit" disabled={!newTitle.length}>Save</Button>
					<Button variant="danger">Delete</Button>
				</div>
			</Form>

		</div>
	)
}

export default EditTodoPage
