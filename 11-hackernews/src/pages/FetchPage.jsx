import useFetch from '../hooks/useFetch'
import Button from 'react-bootstrap/Button'

const FetchPage = () => {
	const {
		data,
		error,
		getData,
		isError,
		isLoading,
		setUrl,
	} = useFetch('https://api.chucknorris.io/jokes/random')

	return (
		<>
			<h1>Fetch Page!</h1>

			{isLoading && (<p>Loading...</p>)}

			{isError && (<p><strong>ERROR!</strong> Sorry, an error has occured: {error.message}</p>)}

			{data && !isLoading && (<p className="display-3">{data.value}</p>)}

			<Button variant="primary" onClick={getData} disabled={isLoading}>MOAR!!!</Button>

			<Button variant="success" onClick={() => setUrl('https://api.chucknorris.io/jokes/random')}>Set correct URL</Button>
			<Button variant="warning" onClick={() => setUrl('https://api.chucknorris.io/NO-JOKE-4-U')}>Set non-existing URL</Button>
		</>
	)
}

export default FetchPage
