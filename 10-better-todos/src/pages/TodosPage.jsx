import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import TodosAPI from '../services/TodosAPI'

const TodosPage = () => {
	const [todos, setTodos] = useState([])

	// Get todos from api
	const getTodos = async () => {
		const data = await TodosAPI.getTodos()
		setTodos(data)
	}

	/*
	// Delete a todo in the api
	const deleteTodo = async (todo) => {
		await TodosAPI.deleteTodo(todo.id)
		getTodos()
	}
	*/

	// Get todos from api when component is first mounted
	useEffect(() => {
		getTodos()
	}, [])

	return (
		<>
			<h1>Todos</h1>

			{todos.length > 0 && (
				<ListGroup className="todolist">
					{todos.map(todo =>
						<ListGroup.Item
							action
							as={Link}
							className={todo.completed ? 'done' : ''}
							key={todo.id}
							to={`/todos/${todo.id}`}
						>
							{todo.title}
						</ListGroup.Item>
					)}
				</ListGroup>
			)}

			{todos.length === 0 && (
				<p className="status">No todos 🥳!</p>
			)}
		</>
	)
}

export default TodosPage;
