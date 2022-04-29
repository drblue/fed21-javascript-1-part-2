import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (initialUrl = null) => {
	const [url, setUrl] = useState(initialUrl)
	const [data, setData] = useState()
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const getData = useCallback(async () => {
		// tell everyone we're starting to load data
		setIsLoading(true)

		try {
			// request data from api
			const response = await axios.get(url)

			// fake slow api 😴
			await new Promise(r => setTimeout(r, 1500))

			// set response from api
			setData(response.data)

			// reset any previous error
			setIsError(false)
			setError(null)
		} catch (err) {
			setIsError(true)
			setError(err)
		} finally {
			// tell everyone we're done loading
			setIsLoading(false)
		}

	}, [url])

	useEffect(() => {
		// yay we gots new urlz, fetch! 🐶
		if (!url) {
			return
		}

		getData()
	}, [getData, url])

	return {
		data,
		error,
		getData,
		isError,
		isLoading,
		setUrl,
	}
}

export default useFetch
