const TodoListItem = ({ todo }) => {
	return (
		<li className={todo.completed ? 'done' : ''}>
			<span
				className="todo-title"
				// onClick={() => toggleTodo(todo)}
			>
				{todo.title}
			</span>

			<span
				className="todo-delete"
				// onClick={() => deleteTodo(todo)}
			>🗑</span>
		</li>
	)
}

export default TodoListItem
