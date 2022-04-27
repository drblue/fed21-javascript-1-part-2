import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (initialUrl = null) => {
	const [url, setUrl] = useState(initialUrl)
	const [data, setData] = useState()

	useEffect(() => {
		// yay we gots new urlz, fetch! 🐶
		if (!url) {
			return
		}

		const fetchData = async () => {
			const response = await axios.get(url)
			setData(response.data)
		}
		fetchData()
	}, [url])

	return {
		data,
		setUrl,
	}
}

export default useFetch
