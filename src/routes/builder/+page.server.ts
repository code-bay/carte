import type { PageServerLoad, Actions } from './$types';
import { Deta } from "deta"
import { env } from '$env/dynamic/private';

const deta = Deta(env.DETA_SECRET_KEY)
const db = deta.Base('simple_db');
const drive = deta.Drive('card_images')

export const load = (async () => {
	const response = await db.get("card-info")
	return { response };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const image = data.get('cover-image') as File;

		if (image.size > 0) {
			let buffer: any;
			await image.arrayBuffer().then(buff => {
				buffer = new Uint8Array(buff)
			})
			await drive.put("bg.jpg", { data: buffer });
		}

		await db.put({
			email: `${data.get('email')}`,
			name: `${data.get('name')}`,
			phone: `${data.get('phone')}`,
			job_title: `${data.get('job-title')}`,
			website: `${data.get('website')}`,
			adress: `${data.get('adress')}`,
			color: `${data.get('color')}`
		}, "card-info");
	}
} satisfies Actions