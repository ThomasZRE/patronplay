import { getSession } from '$lib/server/getSession';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    const user = await getSession(cookies);

    return { user };
}) satisfies LayoutServerLoad;