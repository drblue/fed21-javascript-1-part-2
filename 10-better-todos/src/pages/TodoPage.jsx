import { useParams } from 'react-router-dom'

const TodoPage = () => {
	const { id } = useParams()

	return (
		<div>Show todo with id {id}.</div>
	)
}

export default TodoPage
