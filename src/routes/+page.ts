import type { PageLoad } from './$types';
import { generateRandomColor } from '$lib/utils/generateRandomColor'

export const load = (async () => {
	const mainColor = generateRandomColor()

	return { mainColor }
}) satisfies PageLoad;