import type { LayoutServerLoad } from './$types';
import { generateColorPalette, generateRandomColor } from '$lib/index';
import { Deta } from "deta"
import { env } from '$env/dynamic/private';

const deta = Deta(env.DETA_SECRET_KEY)
const db = deta.Base('simple_db');

export const load = (async () => {
	const userData = await db.get("card-info") as any;
	let palette: any;

	if (userData && userData.color) {
		palette = generateColorPalette(userData.color);
	} else {
		palette = generateColorPalette(generateRandomColor());
	}

	return { palette }
}) satisfies LayoutServerLoad;