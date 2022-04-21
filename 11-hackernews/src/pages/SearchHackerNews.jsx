import { useEffect, useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

const SearchHackerNews = () => {
	const [searchInput, setSearchInput] = useState('')
	const [loading, setLoading] = useState(true)
	const searchInputRef = useRef()

	const handleSubmit = async e => {
		e.preventDefault()

		if (!searchInput.length) {
			return
		}

		// search HN
	}

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

			{true && (
				<div className="search-result mt-4">
					<p>Showing HITS search results for QUERY...</p>

					<ListGroup>
						{[{}].map(hit => (
							<ListGroup.Item
								action
								href={''}
								key={''}
							>
								<h3>TITLE</h3>
								<p className="text-muted small mb-0">Posted at CREATED_AT by AUTHOR</p>
							</ListGroup.Item>
						))}
					</ListGroup>

					<div className="d-flex justify-content-between align-items-center mt-4">
						<div className="prev">
							<Button
								variant="primary"
							>Previous Page</Button>
						</div>
						<div className="page">PAGE</div>
						<div className="next">
							<Button
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
