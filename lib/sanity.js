import SanityClient from '@sanity/client'

const options = {
	dataset: process.env.SANITY_DATASET_NAME,
	projectId: process.env.SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2021-08-31',
}

//useCdn === true gives fast response cached data
//useCdn === false gives slow response latest data

export default SanityClient(options)
