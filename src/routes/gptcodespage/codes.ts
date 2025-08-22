import { error } from "@sveltejs/kit";
import { BASE_URL } from "$env/static/private";

const baseUrl = BASE_URL;

async function getLatest() {
    const response = await fetch(baseUrl);

    if (!response) error(404);

    return response.json();
}

export { getLatest };
