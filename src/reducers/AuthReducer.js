export const authActions = {
    SET_TOKEN: "SET_TOKEN",
    UNSET_TOKEN: "UNSET_TOKEN"
}

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            return { ...state, token: true }
        case "UNSET_TOKEN":
            return { ...state, token: undefined }
        default:
            return state
    }
}