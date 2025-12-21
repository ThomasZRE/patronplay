import { PayloadSDK } from '@payloadcms/sdk';
import type { PageServerLoad } from './$types';
import { PAYLOAD_SERVER } from '$env/static/private';

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || ''
})

export const load: PageServerLoad = async ({ cookies, params }) => {
    const token = cookies.get('sessionid') || '';

    // Debug token & id
    //console.log("Current user token:", token);
    console.log("Parameters for load in Orders...\n", params);
    
    const order = await payload.findByID({
        collection: 'transactions',
        id: params.slug,
    }, {
        headers: {
            Authorization: `JWT ${token}`,
        }
    });

    return { order };
};