import {generatePermalink} from 'eleventy-plugin-fluid';

export default {
	layout: 'layouts/post',
	eleventyComputed: {
		permalink(data) {
			return generatePermalink(data, 'posts');
		},
	},
};
