/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

// eslint-disable-next-line no-unused-vars
const sleep = async delay => new Promise(r => setTimeout(r, delay))

/**
 * Get all todos
 */
const getTodos = async () => {
	const res = await axios.get(`${BASE_URL}/todos`)
	return res.data
}

/**
 * Get a single todo
 */
const getTodo = async (id) => {
	const res = await axios.get(`${BASE_URL}/todos/${id}`)
	// await sleep(1500)
	return res.data
}

/**
 * Create a new todo
 *
 * @param data Object with properties and values for the new todo
 */
const createTodo = async (data) => {
	const res = await axios.post(`${BASE_URL}/todos`, data)
	return res.data
}

/**
 * Update a todo
 *
 * @param todo_id Todo to update
 * @param data Data to update todo with
 */
const updateTodo = async (todo_id, data) => {
	const res = await axios.patch(`${BASE_URL}/todos/${todo_id}`, data)
	return res.data
}

/**
 * Delete a todo
 *
 * @param todo_id Todo to delete
 */
const deleteTodo = async (todo_id) => {
	const res = await axios.delete(`${BASE_URL}/todos/${todo_id}`)
	return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getTodos,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
}
