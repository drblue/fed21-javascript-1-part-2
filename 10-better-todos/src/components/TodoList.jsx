import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
	return (
		<ul className="todolist">
			{
				todos.map((todo, index) =>
					<TodoListItem
						key={index}
						onTitleClick={onToggleTodo}
						onDelete={onDeleteTodo}
						todo={todo}
					/>
				)
			}
		</ul>
	)
}

export default TodoList
