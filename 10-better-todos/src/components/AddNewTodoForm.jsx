import React, { useEffect, useRef, useState } from 'react'

const AddNewTodoForm = ({ onAddNewTodo }) => {
	// input state
	const [newTodoTitle, setNewTodoTitle] = useState('')
	// input reference
	const newTodoTitleRef = useRef()

	const handleSubmit = e => {
		// stop form from submitting
		e.preventDefault()

		// push a new todo to the todos state
		const newTodo = { title: newTodoTitle, completed: false }
		onAddNewTodo(newTodo)

		// clear newTodoTitle state
		setNewTodoTitle('')
	}

	// focus on input field when component is mounted
	useEffect(() => {
		newTodoTitleRef.current.focus()
	}, [])

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Todo title"
					ref={newTodoTitleRef}
					onChange={e => setNewTodoTitle(e.target.value)}
					value={newTodoTitle}
				/>
				<button
					type="submit"
					className="btn btn-primary"
					disabled={!newTodoTitle.length}
				>
					Create
				</button>
			</div>
		</form>
	)
}

export default AddNewTodoForm
