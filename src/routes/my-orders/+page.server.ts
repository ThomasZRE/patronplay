import { PayloadSDK } from "@payloadcms/sdk";
import type { PageServerLoad } from "./$types";
import { PAYLOAD_SERVER } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
import { getSession } from "$lib/server/getSession";

const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || ''
});

export const load: PageServerLoad = async ({ cookies, url }) => {
    const token = cookies.get('sessionid') || '';

    // Get current user
    const user = await getSession(cookies);
    const currentPage = Number(url.searchParams.get('page') || '1');


    if (!user) throw redirect(303, '/login');


    // Fetch transactions
    const result = await payload.find({
            collection: 'transactions',
            where: {
                buyer: {
                    equals: user.id || ''
                }
            },
            sort: '-createdAt',
            limit: 10,
            page: currentPage,
            depth: 2,
        },
        {
            headers: {
                Authorization: `JWT ${token}`,
            }
        }
    );

    return {
        orders: result.docs,
        pagination: {
            page: result.page,
            totalPages: result.totalPages,
            hasNextPage: result.hasNextPage,
            hasPrevPage: result.hasPrevPage,
        }
    }

}