import { headUrl } from './index';

const loginUrl = `${headUrl}/auth/login`;
const registerUrl = `${headUrl}/users`;
const usersUrl = `${headUrl}/api/users`;

const requestHeaders = {
    'Content-Type': 'application/json',
}

export const createUserRequest = async (userData) => {
    const response = await fetch(registerUrl, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(userData),
    });
    return response.json();
}

export const userAuthLogin = async (userData) => {
    const response = await fetch(loginUrl, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(userData),
    });
    return response.json();
}

export const userInfoById = async (userId) => {
    /* const response = await fetch(`${usersUrl}/${userId}`, {
        method: 'GET',
        headers: requestHeaders,
    });
    return response.json(); */
}