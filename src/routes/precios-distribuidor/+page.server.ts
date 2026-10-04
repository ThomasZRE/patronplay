import type { PageServerLoad } from './$types';
import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';
import { getSession } from '$lib/server/getSession';
import { redirect } from '@sveltejs/kit';

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || '',
})

const SERVICES_FETCH_LIMIT = 20;

export const load = (async({ cookies }) => { 
    const user = await getSession(cookies);
    
    // Check if there's any session 
    if (user) {
        redirect(302, '/');
    }

    return {
        payloadServer: PAYLOAD_SERVER,
        collection: await payload.find({
            collection: 'services',
            depth: 1,
            limit: SERVICES_FETCH_LIMIT,

        })
    }
}) satisfies PageServerLoad;


