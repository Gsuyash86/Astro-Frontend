const PersonSchema = (data) => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: data[0]?.name || '',
	};
};

export default PersonSchema;
