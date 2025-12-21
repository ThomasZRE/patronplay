import { PAYLOAD_SERVER } from "$env/static/private"
import { PayloadSDK } from "@payloadcms/sdk"


const payload = new PayloadSDK({
    baseURL: PAYLOAD_SERVER || ''
})

export const makeOrder = async (serviceId: string, userId: string, token: string) => {
    const result = await payload.create({
        collection: 'transactions',
        data: {
            buyer: userId,
            service: serviceId,
        }
    }, {
        headers: {
            Authorization: `JWT ${token}`,
        }
    })
    console.log('Result in makeOrder function:', result);
    return result;
}