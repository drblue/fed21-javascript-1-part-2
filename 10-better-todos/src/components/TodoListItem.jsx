import { Link } from 'react-router-dom'

const TodoListItem = ({ todo }) => {
	return (
		<li className={todo.completed ? 'done' : ''}>
			<Link
				className="todo-title"
				to={`/todos/${todo.id}`}
			>
				{todo.title}
			</Link>
		</li>
	)
}

export default TodoListItem
