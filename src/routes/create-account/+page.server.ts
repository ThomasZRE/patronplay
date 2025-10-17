import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || '',
})

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ cookies, request }) => {
        // Get data from form
        const data = await request.formData();
        console.log(data);
        
        // Login in payload
        /*
        const data = await payload.login({
            collection: 'users',
            data: {
                username: 
            }
        });*/
    }
} satisfies Actions;
