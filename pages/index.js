/* eslint-disable @next/next/no-img-element */
import AuthorIntro from 'components/AuthorIntro'
import CardItem from 'components/CardItem'
import PageLayout from 'components/PageLayout'
import { getAllBlogs } from 'lib/api'
import { Col, Row } from 'react-bootstrap'

export default function Home({ blogs }) {
	return (
		<PageLayout>
			<AuthorIntro />
			<hr />
			<Row className='mb-5'>
				{/* <Col md='10'>
					<CardListItem />
				</Col> */}
				{blogs.map((blog) => (
					<Col key={blog.slug} md='4'>
						<CardItem
							title={blog.title}
							subtitle={blog.subtitle}
							date={blog.date}
							image={blog.coverImage}
							author={blog.author}
						/>
					</Col>
				))}
			</Row>
		</PageLayout>
	)
}

// This function is called during the build (build time)
//provides props to your page
//it will create static page

export const getStaticProps = async () => {
	const blogs = await getAllBlogs()

	return {
		props: {
			blogs,
		},
	}
}
