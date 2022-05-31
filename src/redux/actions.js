export const userLogin = userData => {
    return {
        type: 'USER_LOGIN',
        payload: {
            userId: userData.userId,
            userEmail: userData.userEmail,
            userName: userData.userName,
            userToken: userData.userToken,
            userTokenType: userData.userTokenType,
        }
    }
}