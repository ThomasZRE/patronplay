import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async () => {
    throw redirect(303, '/');
}


export const actions: Actions = {
    default: async ({ cookies }) => {
        // Debug action
        console.log("[ACTION] Executing logout action logic...");
        
        // Log before delete
        console.log("[ACTION] Deleting cookie 'sessionid'...");

        // 1. Delete the cookie
        cookies.set('sessionid', '', {
            path: '/',
            expires: new Date(0),
        });

        console.log("[ACTION] Cookie set to expire. Throwing redirect...");
        // 2. Force redirect to login
        throw redirect(303, '/login');
    }
};