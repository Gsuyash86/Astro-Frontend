import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	rewrite: {
		'/:category/(.*)-article-:id': '/articleShow/',
	},
});
