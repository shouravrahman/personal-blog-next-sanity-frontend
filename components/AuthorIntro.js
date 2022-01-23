import { Col, Image, Media, Row } from 'react-bootstrap'

const AuthorIntro = () => (
	<Row>
		<Col md='8'>
			{/* AUTHOR INTRO STARTS */}
			<Media className='mb-4 admin-intro'>
				<Image
					roundedCircle
					width={64}
					height={64}
					className='mr-3'
					src='https://cdn.sanity.io/images/q9rlu9ju/production/8c6ecf78f9e596ce2a66078ff452a7bef46a1479-720x768.jpg'
					alt='shourav rahman'
				/>
				<Media.Body>
					<h5 className='font-weight-bold mb-0'>Hello Friends,</h5>
					<p className='welcome-text'>
						My name is Shourav Rahman and I am an experienced web developer and
						freelance developer. and this is my blog page.
					</p>
				</Media.Body>
			</Media>
			{/* AUTHOR INTRO ENDS */}
		</Col>
	</Row>
)

export default AuthorIntro
