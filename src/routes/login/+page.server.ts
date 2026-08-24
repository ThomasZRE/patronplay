import type { PageServerLoad } from './$types';
import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';
import { redirect, fail, type Actions } from '@sveltejs/kit';
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

        if (!username || !password) {
            return fail(400, 
                { 
                    success: false, 
                    error: 'Username and password are required' 
                });
        }
        
        try {
            const result = await payload.login({
                collection: 'users',
                data:
                    {
                        username: String(username),
                        password: String(password),
                    }, 
            });
        
            if (result?.token) {    
                cookies.set('sessionid', result.token, { 
                    path: '/',
                    httpOnly: true,
                    sameSite: 'lax',
                    secure: process.env.NODE_ENV === 'production',
                });

                // Redirects if successful login
                redirect(303, '/');
            } 

            return fail(400, 
                {
                    success: false,
                    error: 'Invalid credentials'
                }
            );

        } catch (e: any) {
            // Case of a sveltekit redirect
            if (e?.status === 303 || e?.status === 302) throw e;

            console.log("Login error:", e);

            // Makes error string serializable
            return fail(400, 
                {
                    success: false,
                    error: e?.message || 'Login failed. Please check your credentials',
                }
            );
        }
    }
} satisfies Actions;
