import { PayloadSDK } from '@payloadcms/sdk';
import { PAYLOAD_SERVER } from '$env/static/private';
import type { Cookies } from '@sveltejs/kit';

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || '',
})

export async function getSession(cookies: Cookies) {
    // Gets browser token id
    const token = cookies.get('sessionid');

    if (!token) return null;

    try {
        // Use Me operation for session token
        const { user } = await payload.me(
            { collection: 'users'},
            {
                headers:
                {
                    Authorization: `JWT ${token}`,
                },
            },
        );
        return user ?? null;
    } catch (e) {
        console.log("Failed to get user:", e);
        return null;
    }
}