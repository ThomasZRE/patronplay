import type { PageServerLoad } from './$types';
import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';
import { redirect, type Actions } from '@sveltejs/kit';
import { getSession } from '$lib/server/getSession';
import { makeOrder } from '$lib/server/makeOrder';

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


export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const userId = data.get('userId') as string;
        const serviceId = data.get('serviceId') as string;
        
        // Debug token id
        console.log("User ID in action:", userId);
        console.log("Service ID in action:", serviceId);

    
        const token = cookies.get('sessionid') || '';
        if (!token) {
            return { success: false, error: 'No session token found' };
        }

        console.log("Token in action:", token);

        const result = await makeOrder(serviceId, userId, token);
        console.log(result);
        redirect(303, `/orders/${result.id}`);
    }
} satisfies Actions;