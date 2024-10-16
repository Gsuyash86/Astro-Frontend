export const formatDate = (date) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-US', options);

	const hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	const formattedTime = `${hours % 12 || 12}:${String(minutes).padStart(
		2,
		'0'
	)} ${ampm}`;

	// Assuming the timezone is Indian Standard Time (IST)
	const timezone = 'IST';

	return `Updated ${formattedDate}, ${formattedTime} ${timezone}`;
};
