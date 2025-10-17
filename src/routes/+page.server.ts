import type { PageServerLoad } from './$types';
import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || '',
})

export const load = (async({ cookies }) => { 
    return {
        collection: await payload.find({
            collection: 'services'
        })
    }
}) satisfies PageServerLoad;