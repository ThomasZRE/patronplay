import type { PageServerLoad } from './$types';
import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';
//import { redirect } from '@sveltejs/kit';
//import { getSession } from '$lib/server/getSession';

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || '',
})

const SERVICES_FETCH_LIMIT = 20;

export const load = (async({ cookies }) => { 

    return {
        payloadServer: PAYLOAD_SERVER,
        collection: await payload.find({
            collection: 'services',
            depth: 1,
            limit: SERVICES_FETCH_LIMIT,

        })
    }
}) satisfies PageServerLoad;


