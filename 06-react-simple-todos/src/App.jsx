import { useEffect, useState } from 'react'
import './App.css';

const App = () => {
	const [todos, setTodos] = useState([
		{ title: "Make coffee", completed: true },
		{ title: "Drink coffee", completed: false },
		{ title: "Drink MOAR coffee", completed: false },
		{ title: "Drink ALL THE coffee", completed: false },
	])
	const [unfinishedTodos, setUnfinishedTodos] = useState([])
	const [finishedTodos, setFinishedTodos] = useState([])

	// input state
	const [newTodoTitle, setNewTodoTitle] = useState('')

	const toggleTodo = (todo) => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	const deleteTodo = (clickedTodo) => {
		setTodos(todos.filter(todo => todo !== clickedTodo))
	}

	const handleFormSubmit = e => {
		// stop form from submitting
		e.preventDefault()

		// push a new todo to the todos state
		const newTodo = { title: newTodoTitle, completed: false }
		setTodos([...todos, newTodo])

		// clear newTodoTitle state
		setNewTodoTitle('')
	}

	// Derive unfinishedTodos and finishedTodos from todos state
	useEffect(() => {
		console.log("Filtering todos...")
		setUnfinishedTodos(todos.filter(todo => !todo.completed))
		setFinishedTodos(todos.filter(todo => todo.completed))
	}, [todos])

	// Our first side-effect
	useEffect(() => {
		// This will be executed _after_ *EACH* render
		console.log("Updating page title...")
		document.title = `${finishedTodos.length}/${todos.length} completed`
	}, [finishedTodos, todos])

	return (
		<div className="App container">
			<h1>React Simple Todos</h1>

			<div className="mb-3">
				<form onSubmit={handleFormSubmit}>
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Todo title"
							onChange={e => setNewTodoTitle(e.target.value)}
							value={newTodoTitle}
						/>
						<button
							type="submit"
							className="btn btn-primary"
						>
							Create
						</button>
					</div>
				</form>
			</div>

			{todos.length > 0 && (
				<>
					{unfinishedTodos.length > 0 && (
						<ul className="todolist">
							{
								unfinishedTodos.map((todo, index) =>
									(
										<li className={todo.completed ? 'done' : ''} key={index}>
											<span
												className="todo-title"
												onClick={() => toggleTodo(todo)}
											>
												{todo.title}
											</span>

											<span
												className="todo-delete"
												onClick={() => deleteTodo(todo)}
											>🗑</span>
										</li>
									)
								)
							}
						</ul>
					)}

					{finishedTodos.length > 0 && (
						<>
							<h2>Completed todos</h2>
							<ul className="todolist">
								{
									finishedTodos.map((todo, index) =>
										(
											<li className={todo.completed ? 'done' : ''} key={index}>
												<span
													className="todo-title"
													onClick={() => toggleTodo(todo)}
												>
													{todo.title}
												</span>

												<span
													className="todo-delete"
													onClick={() => deleteTodo(todo)}
												>🗑</span>
											</li>
										)
									)
								}
							</ul>
						</>
					)}

					<p className="status">{finishedTodos.length} av {todos.length} todos avklarade.</p>
				</>
			)}
		</div>
	)
}

export default App;
