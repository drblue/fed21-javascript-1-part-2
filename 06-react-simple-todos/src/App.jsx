import { useEffect, useState } from 'react'
import AddNewTodoForm from './components/AddNewTodoForm'
import TodoListItem from './components/TodoListItem'
import './App.css'
import AlertInfo from './components/AlertInfo'

const App = () => {
	const [todos, setTodos] = useState([
		{ title: "Make coffee", completed: true },
		{ title: "Drink coffee", completed: false },
		{ title: "Drink MOAR coffee", completed: false },
		{ title: "Drink ALL THE coffee", completed: false },
	])
	const [unfinishedTodos, setUnfinishedTodos] = useState([])
	const [finishedTodos, setFinishedTodos] = useState([])

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
		console.log("I'm a newly mounted component 👶🏽")
	}, [])

	// This will only be executed if `todos` have changed since last render,
	// and only AFTER the component has been rendered
	useEffect(() => {
		// Derive unfinishedTodos and finishedTodos from todos state
		console.log("Filtering todos...")
		setUnfinishedTodos(todos.filter(todo => !todo.completed))
		setFinishedTodos(todos.filter(todo => todo.completed))
	}, [todos])

	// This will only be executed if `finishedTodos` OR `todos` have changed since last render,
	// and only AFTER the component has been rendered
	useEffect(() => {
		console.log("Updating page title...")
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
						<ul className="todolist">
							{
								unfinishedTodos.map((todo, index) =>
									<TodoListItem
										key={index}
										onTitleClick={toggleTodo}
										onDelete={deleteTodo}
										todo={todo}
									/>
								)
							}
						</ul>
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
							<ul className="todolist">
								{
									finishedTodos.map((todo, index) =>
										<TodoListItem
											key={index}
											onTitleClick={toggleTodo}
											onDelete={deleteTodo}
											todo={todo}
										/>
									)
								}
							</ul>
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
