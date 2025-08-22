import { error } from "@sveltejs/kit";
//import { BASE_URL } from "$env/static/private";

const baseUrl = "https://chatgptcodespage.onrender.com/api/codes/latest";

async function getLatest() {
    const response = await fetch(baseUrl);

    if (!response) error(404);

    return response.json();
}

export { getLatest };
