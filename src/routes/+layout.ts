import type { LayoutLoad } from './$types';
import { generateColorPalette, generateRandomColor, setPalette } from '$lib/index';
import { browser } from '$app/environment';

export const load = (async () => {
	const randomColor = generateRandomColor();
	const palette = generateColorPalette(randomColor);

	return { palette }
}) satisfies LayoutLoad;