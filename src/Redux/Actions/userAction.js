export const updateUserData = (payload) => {
    return{
        type: "USER_DATA_UPDATE",
        payload
    }
}

export const logoutUser = (payload) => {
    return{
        type: "USER_LOGOUT",
        payload,
    }
}