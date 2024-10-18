import { getNewImageUrl } from '../../../components/Utils';
const HowToFaqSchema = (data) => {
	console.log('data is ', data);
	let mainData;
	try {
		mainData = JSON.parse(data);
		if (mainData && mainData['@type'] && mainData['@type'] == 'CmsHowTo') {
			mainData['@type'] = 'HowTo';
		}
		if (mainData && mainData?.step__cms) {
			mainData.step = mainData.step__cms;
			delete mainData.step__cms;
			mainData?.step?.map((item, index) => {
				if (item?.image__cmsEmbed) {
					item.image = item.image__cmsEmbed;
					delete item.image__cmsEmbed;
				}
				if (item && item['@type'] && item['@type'] == 'CmsHowToStep') {
					item['@type'] = 'HowToStep';
				}
				if (
					item &&
					item.image &&
					item.image['@type'] &&
					item.image['@type'] == 'CmsImageObject'
				) {
					item.image['@type'] = 'ImageObject';
				}
				if (item?.image?.hostId) {
					delete item.image.hostId;
				}
				if (item?.image?.msid) {
					item.image.url = getNewImageUrl(
						parseInt(item.image.msid),
						100,
						1280,
						720
					);
				}
				if (item?.image?.name) {
					delete item.image.name;
				}
				if (item?.image?.wfid) {
					delete item.image.wfid;
					delete item.image.msid;
				}
			});
		}
	} catch (error) {
		console.error('ERROR : How To Faq Schema - ', error);
	}

	return mainData;
};

export default HowToFaqSchema;
