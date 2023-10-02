import type { PageServerLoad, Actions } from './$types';
import { Deta } from "deta"
import { env } from '$env/dynamic/private';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const deta = Deta(env.DETA_SECRET_KEY)
		const db = deta.Base('simple_db');

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