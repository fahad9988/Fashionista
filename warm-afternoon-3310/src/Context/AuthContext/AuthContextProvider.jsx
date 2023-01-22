import React, { useReducer, createContext } from 'react';
import reducer from './reducer';

export const AuthContext = createContext();

const initState = {
    isLoading: false,
    isAuth: false,
    token: "",
    isError: false,
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <AuthContextProvider value={{ state, dispatch}}>
            {children}
        </AuthContextProvider>
    )
}