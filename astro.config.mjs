import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [react()],
	adapter: node({
		mode: 'standalone' // or 'middleware' if you're using it with another server
	}),
	async rewrites() {
		return {
			source: '/:category/(.*)-article-:id',
			destination: '/articleShow'
		};
	},

});
