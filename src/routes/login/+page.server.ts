import type { PageServerLoad } from './$types';
import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';
import { redirect, type Actions } from '@sveltejs/kit';
import { getSession } from '$lib/server/getSession';

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || '',
})

export const load = (async ({ cookies }) => {
    const user = await getSession(cookies);

    // Check if there's any session 
    if (user) {
        redirect(302, '/');
    }

    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ cookies, request }) => {
        // Get data from form
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        
        const user = await payload.find({
            collection: 'users',
            where: {
                username: {
                    equals: username
                }
            }
        })

        // Check if user exists
        if (user.docs.length === 0) {
            console.log("User", username, "does not exist");
            return { success: false, error: 'User does not exist' };
        }

        try {
            const result = await payload.login({
                collection: 'users',
                data: {
                    username: username as string,
                    password: password as string, 
                }
            });
        
            if (result.token) {    
                cookies.set('sessionid', result.token, { 
                    path: '/',
                    httpOnly: true,
                    sameSite: 'lax',
                    secure: process.env.NODE_ENV === 'production',
                });
                return { success: true }
            } else {
                return { success: false, error: 'Invalid Email or Password' }
            }
        } catch (e) {
            console.log("Login error:", e);
            return { success: false, error: e };
        }
    }
} satisfies Actions;
