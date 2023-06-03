import type { PageServerLoad } from './$types';

import data from '../../data/main.json';


export const load: PageServerLoad = () => ({
		meta: data.meta,
		content: data.content,
	});
