const initialState = {
    auth: false,
    data: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_DATA_UPDATE":   
            return {...state, data: action.payload}
    
        default:
            return state;
    }
}