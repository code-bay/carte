import type { PageLoad } from './$types';
import { generateRandomColor, generateColorPalette } from '$lib/index';

export const load = (async () => {
	const randomColor = generateRandomColor();
	const palette = generateColorPalette(randomColor);

	return { palette }
}) satisfies PageLoad;