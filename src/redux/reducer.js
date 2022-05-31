const initialState = {
    userId: null,
    userEmail: null,
    userName: null,
    userToken: null,
    userTokenType: null,
}


const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...prevState,
                userId: action.payload.userId,
                userEmail: action.payload.userEmail,
                userName: action.payload.userName,
                userToken: action.payload.userToken,
                userTokenType: action.payload.userTokenType,
            }
        default:
            return prevState;
    };
};

export default userReducer;
