import { useEffect, useState } from 'react'
import AddNewTodoForm from './components/AddNewTodoForm'
import AlertInfo from './components/AlertInfo'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
	const [todos, setTodos] = useState([])
	const [unfinishedTodos, setUnfinishedTodos] = useState([])
	const [finishedTodos, setFinishedTodos] = useState([])

	console.log( { todos } )

	const toggleTodo = (todo) => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	const deleteTodo = (clickedTodo) => {
		setTodos(todos.filter(todo => todo !== clickedTodo))
	}

	const handleAddNewTodo = (newTodo) => {
		setTodos([...todos, newTodo])
	}

	// This will only be executed when the component is mounted,
	// and only AFTER the component has been rendered
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'))
		if (storedTodos) {
			console.log("Got todos from localStorage", storedTodos)
			setTodos(storedTodos)
		}
	}, [])

	// This will only be executed if `todos` have changed since last render,
	// and only AFTER the component has been rendered
	useEffect(() => {
		// Save new todos state to localStorage
		console.log("Updating localStorage with new todos", todos)
		localStorage.setItem('todos', JSON.stringify(todos))

		// Derive unfinishedTodos and finishedTodos from todos state
		setUnfinishedTodos(todos.filter(todo => !todo.completed))
		setFinishedTodos(todos.filter(todo => todo.completed))
	}, [todos])

	// This will only be executed if `finishedTodos` OR `todos` have changed since last render,
	// and only AFTER the component has been rendered
	useEffect(() => {
		document.title = `${finishedTodos.length}/${todos.length} completed`
	}, [finishedTodos, todos])

	return (
		<div className="App container">
			<h1>React Simple Todos</h1>

			<div className="mb-3">
				<AddNewTodoForm
					onAddNewTodo={handleAddNewTodo}
				/>
			</div>

			{todos.length > 0 && (
				<>
					{unfinishedTodos.length > 0 && (
						<TodoList
							todos={unfinishedTodos}
							onToggleTodo={toggleTodo}
							onDeleteTodo={deleteTodo}
						/>
					)}
					{unfinishedTodos.length === 0 && (
						<AlertInfo>
							<h2>Yeeehaaaaw!</h2>
							<img src="https://c.tenor.com/cBcdBXtqL8UAAAAC/colin-mochrie-whos-awesome.gif" className="img-fluid" alt="You're awesome!"/>
							<p>You got <strong>nothing</strong> to do.</p>
						</AlertInfo>
					)}

					{finishedTodos.length > 0 && (
						<>
							<h2>Completed todos</h2>
							<TodoList
								todos={finishedTodos}
								onToggleTodo={toggleTodo}
								onDeleteTodo={deleteTodo}
							/>
						</>
					)}

					<p className="status">{finishedTodos.length} av {todos.length} todos avklarade.</p>
				</>
			)}

			{todos.length === 0 && (
				<>
					<AlertInfo>
						Move along people, nothing to see here.
					</AlertInfo>
				</>
			)}
		</div>
	)
}

export default App;
