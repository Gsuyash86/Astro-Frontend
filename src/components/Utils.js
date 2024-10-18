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

export function removeHtmlTags(strParam) {
	let str = typeof strParam !== 'undefined' ? strParam : '';
	str = str?.replace(/&lt;/g, '<');
	str = str?.replace(/&gt;/g, '>');
	str = str?.replace(/&lt;\//g, '>');
	str = str?.replace(/<[^>]*>?/gm, '');
	str = str?.replace(/&amp;/g, '&');
	return str;
}
export const DEFAULT_IMAGE_WIDTH = 200;
export const DEFAULT_IMAGE_HEIGHT = 200;
export const IMG_DOMAIN = process.env.NEXT_PUBLIC_PHOTO_API;
export function getNewImageUrl({
	msid,
	imgSize,
	imgWidth = DEFAULT_IMAGE_WIDTH,
	imgHeight = DEFAULT_IMAGE_HEIGHT,
	resizeMode = false,
	isArticleBanner = false,
	updatedAt,
	imgType = '',
}) {
	if (!msid && isNaN(Number(msid))) {
		return IMG_DEFAULT;
	}
	if (typeof imgWidth !== 'number') {
		imgWidth = DEFAULT_IMAGE_WIDTH;
	}
	if (typeof imgHeight !== 'number') {
		imgHeight = DEFAULT_IMAGE_HEIGHT;
	}
	const imgResizeMode = resizeMode ? 'resizemode-4' : 'resizemode-3';
	const imgurl = `${IMG_DOMAIN}/${
		!isArticleBanner ? 'thumb' : 'photo'
	}/msid-${msid}${updatedAt ? `,updatedat-${updatedAt}` : ''}${
		imgSize ? `,thumbsize-${imgSize}` : ''
	}${imgWidth ? `,width-${imgWidth}` : ''}${
		imgHeight ? `,height-${imgHeight}` : ''
	},${imgResizeMode}/${msid}.jpg`;
	// console.log(imgurl,'..........imgurl..........');
	return imgurl;
}
