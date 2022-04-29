import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (initialUrl = null) => {
	const [url, setUrl] = useState(initialUrl)
	const [data, setData] = useState()

	const getData = useCallback(async () => {
		const response = await axios.get(url)
		await new Promise(r => setTimeout(r, 3000))
		setData(response.data)
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
		setUrl,
	}
}

export default useFetch
