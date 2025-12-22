import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";


export const actions: Actions = {
    default: async ({ cookies }) => {
        // Debug action
        console.log("[ACTION] Executing logout action logic...");
        
        // Log before delete
        console.log("[ACTION] Deleting cookie 'sessionid'...");

        // TODO: remove httpOnly and secure when deploying
        // 1. Delete the cookie
        cookies.set('sessionid', '', {
            path: '/',
            expires: new Date(0),
            secure: false,   // Might delete later
            httpOnly: true
        });

        console.log("[ACTION] Cookie set to expire. Throwing redirect...");
        // 2. Force redirect to home
        throw redirect  (303, '/');
    }
};