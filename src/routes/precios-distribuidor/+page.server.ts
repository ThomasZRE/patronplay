import type { PageServerLoad } from './$types';
import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { getSession } from '$lib/server/getSession';

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || '',
})

const SERVICES_FETCH_LIMIT = 20;

export const load = (async({ cookies }) => { 

    /*
    const user = await getSession(cookies);
    let dummyuser;
        
    // Check if there's any session 
    if (user) {
        redirect(302, '/');
    }

    try {
            const result = await payload.login({
                collection: 'users',
                data:
                    {
                        username: "dummydist",
                        password: "distdum352",
                    }, 
            });
        
            if (result?.token) {    
                dummyuser = result.user || null;
                console.log("User set as:", user);
            }
        }
    catch (e) {
        console.log("Error while getting dummyuser session, more details:\n", e);
    } */


    return {
        payloadServer: PAYLOAD_SERVER,
        collection: await payload.find({
            collection: 'services',
            depth: 1,
            limit: SERVICES_FETCH_LIMIT,

        })
    }
}) satisfies PageServerLoad;


//  | 

