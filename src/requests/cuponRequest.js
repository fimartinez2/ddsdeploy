import { cupons } from "../mockData/cupons";
import { headUrl } from './index';

// TODO: update this.
const cuponsUrl = `${headUrl}/api/cupons`;

const requestHeaders = {
    'Content-Type': 'application/json',
    Authorization: '',
}

export const getCupons = async (userTokenType, userToken) => {
    requestHeaders.Authorization = `${userTokenType} ${userToken}`;
    // TODO: update this.
    const response = await fetch(`${cuponsUrl}/cupon`, {
        method: 'GET',
        headers: requestHeaders,
    });
    // return response.json
    // TODO: Remove this harcoded data.
    return cupons;
}