import useFetch from '../hooks/useFetch'
import Button from 'react-bootstrap/Button'

const FetchPage = () => {
	const { data, getData } = useFetch('https://api.chucknorris.io/jokes/random')

	return (
		<>
			<h1>Fetch Page!</h1>

			{data && (<p className="display-3">{data.value}</p>)}

			<Button variant="success" onClick={getData}>MOAR!!!</Button>
		</>
	)
}

export default FetchPage
