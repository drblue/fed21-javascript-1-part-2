import Image from 'react-bootstrap/Image'
import SadKittyCat from '../assets/images/sad-kitten.gif'

const NotFound = () => {
	return (
		<>
			<h1>Sorry, that page could not be found 😔</h1>

			<Image src={SadKittyCat} fluid />
		</>
	)
}

export default NotFound
