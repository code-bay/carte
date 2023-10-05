import type { LayoutServerLoad } from './$types';
import { generateColorPalette, generateRandomColor } from '$lib/index';
import { deta } from '$lib/server/deta';

const db = deta.Base('simple_db');

export const load = (async () => {
	const userData = await db.get("card-info") as any;
	let palette: any;
	let userColor: string;

	if (userData && userData.color) {
		userColor = userData.color;
		palette = generateColorPalette(userColor);
	} else {
		userColor = generateRandomColor();
		palette = generateColorPalette(userColor);
	}

	return { palette, userColor }
}) satisfies LayoutServerLoad;