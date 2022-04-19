import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import AddNewTodoForm from '../components/AddNewTodoForm'
import TodosAPI from '../services/TodosAPI'

const TodosPage = () => {
	const [todos, setTodos] = useState([])

	// Get todos from api
	const getTodos = async () => {
		const data = await TodosAPI.getTodos()
		setTodos(data)
	}

	// Create a new todo in the api
	const createTodo = async (newTodo) => {
		await TodosAPI.createTodo(newTodo)
		getTodos()
	}

	/*
	// Delete a todo in the api
	const deleteTodo = async (todo) => {
		await TodosAPI.deleteTodo(todo.id)
		getTodos()
	}

	// Toggle the completed status of a todo in the api
	const toggleTodo = async (todo) => {
		await TodosAPI.updateTodo(todo.id, {
			completed: !todo.completed
		})
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

			<div className="mb-3">
				<AddNewTodoForm
					onAddNewTodo={createTodo}
				/>
			</div>

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
