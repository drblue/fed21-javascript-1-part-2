import { useEffect, useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import { search as HackerNewsAPI_search } from '../services/HackerNewsAPI'

const SearchHackerNews = () => {
	const [searchInput, setSearchInput] = useState('')
	const [searchResult, setSearchResult] = useState(null)
	const [page, setPage] = useState(0)
	const [loading, setLoading] = useState(false)
	const searchInputRef = useRef()
	const queryRef = useRef()

	const searchHackerNews = async (searchQuery, page = 0) => {
		// set loading to true
		setLoading(true)
		setSearchResult(null)

		// execute search
		const data = await HackerNewsAPI_search(searchQuery, page)

		// set loading to false
		setSearchResult(data)
		setLoading(false)
	}

	const handleSubmit = async e => {
		e.preventDefault()

		if (!searchInput.length) {
			return
		}

		// save searchInput to queryRef
		queryRef.current = searchInput

		// search HN
		setPage(0)
		searchHackerNews(searchInput, 0)
	}

	// react to changes in our page state
	useEffect(() => {
		if (!queryRef.current) {
			return
		}

		searchHackerNews(queryRef.current, page)
	}, [page])

	return (
		<>
			<h1>🔎🔦👀</h1>

			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="newTitle">
					<Form.Label>Search Query</Form.Label>
					<Form.Control
						onChange={e => setSearchInput(e.target.value)}
						placeholder="Enter your search query"
						ref={searchInputRef}
						required
						type="text"
						value={searchInput}
					/>
				</Form.Group>

				<div className="d-flex justify-content-between">
					<Button variant="success" type="submit" disabled={!searchInput.length}>Search</Button>
				</div>
			</Form>

			{loading && (<div className="mt-4">Loading...</div>)}

			{searchResult && (
				<div className="search-result mt-4">
					<p>Showing {searchResult.nbHits} search results for {searchResult.query}...</p>

					<ListGroup>
						{searchResult.hits.map(hit => (
							<ListGroup.Item
								action
								href={hit.url}
								key={hit.objectID}
							>
								<h3>{hit.title}</h3>
								<p className="text-muted small mb-0">Posted at {hit.created_at} by {hit.author}</p>
							</ListGroup.Item>
						))}
					</ListGroup>

					<div className="d-flex justify-content-between align-items-center mt-4">
						<div className="prev">
							<Button
								disabled={page === 0}
								onClick={() => setPage(prevValue => prevValue - 1)}
								variant="primary"
							>Previous Page</Button>
						</div>
						<div className="page">{page + 1}</div>
						<div className="next">
							<Button
								disabled={page + 1 >= searchResult.nbPages}
								onClick={() => setPage(prevValue => prevValue + 1)}
								variant="primary"
							>Next Page</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default SearchHackerNews
