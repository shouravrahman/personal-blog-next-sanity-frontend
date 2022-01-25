/* eslint-disable @next/next/no-img-element */
import AuthorIntro from 'components/AuthorIntro'
import CardItem from 'components/CardItem'
import CardListItem from 'components/CardListItem'
import FilterMenu from 'components/FilterMenu'
import PageLayout from 'components/PageLayout'
import { getAllBlogs } from 'lib/api'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Home({ blogs }) {
	const [filter, setFilter] = useState({
		view: { list: false },
	})
	return (
		<PageLayout>
			<AuthorIntro />
			<FilterMenu
				filter={filter}
				onChange={(option, value) => {
					setFilter({ ...filter, [option]: value })
				}}
			/>
			<hr />
			<Row className='mb-5'>
				{blogs.map((blog) =>
					filter.view.list ? (
						<Col md='10' key={`${blog.slug}-list`}>
							<CardListItem
								title={blog.title}
								subtitle={blog.subtitle}
								date={blog.date}
								author={blog.author}
								link={{
									href: '/blogs/[slug]',
									as: `/blogs/${blog.slug}`,
								}}
							/>
						</Col>
					) : (
						<Col key={blog.slug} md='4'>
							<CardItem
								title={blog.title}
								subtitle={blog.subtitle}
								date={blog.date}
								image={blog.coverImage}
								author={blog.author}
								link={{
									href: '/blogs/[slug]',
									as: `/blogs/${blog.slug}`,
								}}
							/>
						</Col>
					)
				)}
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
