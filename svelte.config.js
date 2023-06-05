import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$default: './src/layouts/default.svelte',
			'$comp': './src/components',
		},
	}
};


export default config;
