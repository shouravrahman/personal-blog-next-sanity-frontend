/* eslint-disable @next/next/no-img-element */

import BlogContent from 'components/BlogContent'
import BlogHeader from 'components/BlogHeader'
import PageLayout from 'components/PageLayout'
import { getAllBlogs, getBlogBySlug, urlFor } from 'lib/api'
import { Col, Row } from 'react-bootstrap'

const BlogDetail = ({ blog }) => {
	return (
		<PageLayout className='blog-detail-page'>
			<Row>
				<Col md={{ span: 10, offset: 1 }}>
					<BlogHeader
						title={blog.title}
						subtitle={blog.subtitle}
						coverImage={urlFor(blog.coverImage).height(600).url()}
						author={blog.author}
						date={blog.date}
					/>
					<hr />
					{/* Blog Content Here */}
					<BlogContent content={blog.content} />
				</Col>
			</Row>
		</PageLayout>
	)
}

export const getStaticProps = async ({ params }) => {
	const blog = await getBlogBySlug(params.slug)
	return {
		props: {
			blog,
		},
	}
}

export const getStaticPaths = async () => {
	const blogs = await getAllBlogs()

	return {
		paths: blogs?.map((blog) => ({
			params: { slug: blog.slug },
		})),
		fallback: false,
	}
}

export default BlogDetail
