import type { PageServerLoad, Actions } from './$types';
import { Deta } from "deta"
import { env } from '$env/dynamic/private';

export const load = (async () => {
	const deta = Deta(env.DETA_SECRET_KEY)
	const db = deta.Base('simple_db');
	const drive = deta.Drive('card_images');
	const user = await db.get("card-info");
	const image = await drive.get("bg.jpg") as Blob;
	const img = URL.createObjectURL(image)
	console.log(img)

	return { user, img };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const deta = Deta(env.DETA_SECRET_KEY)
		const db = deta.Base('simple_db');
		const drive = deta.Drive('card_images')
		const data = await request.formData();

		const image = data.get('cover-image') as File;

		if (image.size > 0) {
			let buffer: any;
			await image.arrayBuffer().then(buff => {
				buffer = new Uint8Array(buff)
			})
			await drive.put("bg.jpg", { data: buffer, contentType: image.type });
		}

		const user = await db.put({
			name: `${data.get('name')}`,
			role: `${data.get('role')}`,
			company: `${data.get('company')}`,
			type: `${data.get('carte-type')}`,
			carte_icon1_icon: `${data.get('carte-icon1-icon')}`,
			carte_icon2_icon: `${data.get('carte-icon2-icon')}`,
			carte_icon3_icon: `${data.get('carte-icon3-icon')}`,
			carte_icon4_icon: `${data.get('carte-icon4-icon')}`,
			carte_info1_main: `${data.get('carte-info_1-main')}`,
			carte_info2_main: `${data.get('carte-info_2-main')}`,
			carte_info3_main: `${data.get('carte-info_3-main')}`,
			carte_info4_main: `${data.get('carte-info_4-main')}`,
			carte_info1_alt: `${data.get('carte-info_1-alt')}`,
			carte_info2_alt: `${data.get('carte-info_2-alt')}`,
			carte_info3_alt: `${data.get('carte-info_3-alt')}`,
			carte_info4_alt: `${data.get('carte-info_4-alt')}`,
			color: `${data.get('color')}`
		}, "card-info");

		return user
	}
} satisfies Actions