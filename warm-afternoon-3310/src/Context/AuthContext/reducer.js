const reducer = (state, action) => {
    switch(action.type) {
        case "Login_Loading": {
            return {
                isLoading: true,
                isAuth: false,
                token: "",
                isError: false,
            };
        }
        case "Login_Success": {
            return {
                isLoading: false,
                isAuth: true,
                token: action.payload,
                isError: false,
            };
        }
        case "Login_Failure": {
            return {
                isLoading: false,
                isAuth: true,
                token: "",
                isError: true,
            };
        }
        default : {
            return state;
        }
    }
}

export default reducer;