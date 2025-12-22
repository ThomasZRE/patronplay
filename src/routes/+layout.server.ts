import { getSession } from '$lib/server/getSession';
import { redirect, type Actions } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || '',
});

export const load = (async ({ cookies }) => {
    const user = await getSession(cookies);
    return { user };
}) satisfies LayoutServerLoad;