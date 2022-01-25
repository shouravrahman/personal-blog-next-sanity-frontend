/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import SanityBlockContent from '@sanity/block-content-to-react'
import { urlFor } from 'lib/api'
import HighlightCode from './HighlightCode'

const serializers = {
	types: {
		code: ({ node: { language, code, filename } }) => {
			return (
				<HighlightCode language={language}>
					{code}
					<div className='code-filename'>{filename}</div>
				</HighlightCode>
			)
		},
		image: ({ node: { asset, alt, position = 'center' } }) => {
			return (
				<div className={`blog-image blog-image-${position}`}>
					<img src={urlFor(asset).height(300).fit('max').url()} />

					<div className='image-alt'>{alt}</div>
				</div>
			)
		},
	},
}
const BlogContent = ({ content }) => {
	return <SanityBlockContent serializers={serializers} blocks={content} />
}

export default BlogContent
