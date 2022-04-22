/**
 * Hacker News API service
 *
 * <https://hn.algolia.com/api>
 */

import axios from 'axios'

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1'

/**
 * Execute a HTTP GET request to an endpoint.
 *
 * @param {string} endpoint Endpoint to HTTP GET
 * @returns Promise
 */
const get = async (endpoint) => {
	const response = await axios.get(endpoint)
	return response.data
}

/**
 * Search Hacker News stories
 *
 * @param {string} query Search query to search for
 * @param {number} page Page of search results to get
 * @returns Promise
 */
export const search = async (query, page) => {
	return get(`/search?query=${query}&tags=story&page=${page}`)
}
