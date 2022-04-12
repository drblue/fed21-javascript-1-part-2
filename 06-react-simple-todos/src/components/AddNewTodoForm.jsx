import React, { useState } from 'react'

const AddNewTodoForm = ({ onAddNewTodo }) => {
	// input state
	const [newTodoTitle, setNewTodoTitle] = useState('')

	const handleSubmit = e => {
		// stop form from submitting
		e.preventDefault()

		// push a new todo to the todos state
		const newTodo = { title: newTodoTitle, completed: false }
		onAddNewTodo(newTodo)

		// clear newTodoTitle state
		setNewTodoTitle('')
	}

	return (
		<form onSubmit={handleSubmit}>
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
	)
}

export default AddNewTodoForm
