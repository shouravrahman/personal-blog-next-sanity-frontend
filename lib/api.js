import imageUrlBuilder from '@sanity/image-url'
import { default as client } from './sanity'

const blogFields = `
title,
subtitle,
// slug
'slug': slug.current,
date,
'author':author->{name,'avatar': avatar.asset->url},
'coverImage': coverImage,
`
const builder = imageUrlBuilder(client)

export function urlFor(source) {
	return builder.image(source)
}

export async function getAllBlogs() {
	const results = await client.fetch(`*[_type == "blog"] {${blogFields}}`)

	return results
}
export async function getBlogBySlug(slug) {
	const result = await client
		.fetch(
			`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
		content[]{..., "asset": asset->}
    }`,
			{ slug }
		)
		.then((res) => res?.[0])

	return result
}
