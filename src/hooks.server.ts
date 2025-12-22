import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // LOG 1: Log every request to see if /logout POST is arriving
    console.log(`[SERVER INCOMING] ${event.request.method} ${event.url.pathname}`);

    // LOG 2: Check if the cookie exists on the incoming request
    const sessionCookie = event.cookies.get('sessionid');
    if (event.url.pathname === '/logout') {
        console.log(`[SERVER LOGOUT] Cookie present? ${sessionCookie ? 'YES' : 'NO'}`);
        if (sessionCookie) console.log(`[SERVER LOGOUT] Cookie value (partial): ${sessionCookie.substring(0, 10)}...`);
    }

    const response = await resolve(event);

    // LOG 3: Log the response status code
    if (event.url.pathname === '/logout') {
        console.log(`[SERVER OUTGOING] /logout status: ${response.status}`);
        console.log(`[SERVER OUTGOING] Set-Cookie header: ${response.headers.get('set-cookie')}`);
    }

    return response;
};