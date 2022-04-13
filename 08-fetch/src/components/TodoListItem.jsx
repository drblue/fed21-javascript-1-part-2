const TodoListItem = ({ todo, onTitleClick, onDelete }) => {
	return (
		<li className={todo.completed ? 'done' : ''}>
			<span
				className="todo-title"
				onClick={() => onTitleClick(todo)}
			>
				{todo.title}
			</span>

			<span
				className="todo-delete"
				onClick={() => onDelete(todo)}
			>🗑</span>
		</li>
	)
}

export default TodoListItem
