const ViewActionSchema = {
	'@context': 'https://schema.org',
	'@type': 'ViewAction',
	target: {
		'@type': 'EntryPoint',
		urlTemplate: process.env.NEXT_PUBLIC_WEBAPP_BASE_URL,
	},
};
export default ViewActionSchema;
