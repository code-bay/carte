import type { LayoutServerLoad } from './$types';
import { generateColorPalette, generateRandomColor } from '$lib/index';
import { Deta } from "deta"
import { env } from '$env/dynamic/private';

export const load = (async () => {
	const deta = Deta(env.DETA_SECRET_KEY)
	const db = deta.Base('simple_db');
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