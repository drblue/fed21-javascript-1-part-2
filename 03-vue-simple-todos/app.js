/**
 * Vue.js Basics
 *
 */

// Create our Vue app
const app = Vue.createApp({
	data() {
		return {
			newTodoTitleInput: "",
			todos: [
				{ title: "Make coffee", completed: true },
				{ title: "Drink coffee", completed: false },
				{ title: "Drink MOAR coffee", completed: false },
				{ title: "Drink ALL THE coffee", completed: false },
			],
		}
	},

	methods: {
		createNewTodo() {
			// create new todo and push it to the list of todos
			this.todos.push({
				title: this.newTodoTitleInput,
				completed: false
			})

			// clear new todo title input
			this.newTodoTitleInput = ""
		},

		deleteTodo(todo) {
			this.todos = this.todos.filter(t => t !== todo)
		},

		toggleTodo(todo) {
			todo.completed = !todo.completed
		}
	},

	computed: {
		finishedTodos() {
			return this.todos.filter(todo => todo.completed)
		},

		newTodoIsValid() {
			return this.newTodoTitleInput.length >= 3
		},

		unfinishedTodos() {
			return this.todos.filter(todo => !todo.completed)
		},

		unfinishedTodosCount() {
			return this.todos.reduce((previousValue, todo) => {
				if (todo.completed) {
					return previousValue
				}

				return previousValue + 1
			}, 0)
		}
	}
})

// Mount our Vue app on the element with id `app` in the DOM
app.mount('#app')
