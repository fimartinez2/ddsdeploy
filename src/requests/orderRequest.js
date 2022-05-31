import { headUrl } from './index';
import { orders } from "../mockData/orders";

// TODO: update this.
const ordersUrl = `${headUrl}/api/v1/orders`;

const requestHeaders = {
    'Content-Type': 'application/json',
    Authorization: '',
}

export const getOrders = async (userTokenType, userToken) => {
    requestHeaders.Authorization = `${userTokenType} ${userToken}`;
    // TODO: update this.
    const response = await fetch(`${ordersUrl}/orders`, {
        method: 'GET',
        headers: requestHeaders,
    });
    // return response.json
    // TODO: Remove this harcoded data.
    return orders;
}