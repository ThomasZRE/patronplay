// export const prerender = false;
// export const ssr = false;

import type { LayoutLoad } from './$types';

export const load = (async () => {
    const progress = true;

    return { progress };
}) satisfies LayoutLoad;

