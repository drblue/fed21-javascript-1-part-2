import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (initialUrl = null) => {
	const [url, setUrl] = useState(initialUrl)
	const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState(false)

	const getData = useCallback(async () => {
		// tell everyone we're starting to load data
		setIsLoading(true)

		// request data from api
		const response = await axios.get(url)

		// fake slow api 😴
		await new Promise(r => setTimeout(r, 3000))

		// set response from api
		setData(response.data)

		// tell everyone we're done loading
		setIsLoading(false)
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
		getData,
		isLoading,
		setUrl,
	}
}

export default useFetch
