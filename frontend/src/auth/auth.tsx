import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: null,
    loggedIn: false,
    login: (token: string | null) => { },
    logout: () => { },
});

export const AuthContextProvider = (props: any) => {
    const tokenKey = 'auth';
    const [token, setToken] = useState(localStorage.getItem(tokenKey))

    // Variable casting to boolean with !!
    const loggedIn = !!token;

    const loginHandler = (token: string | null) => {
        setToken(token);
        localStorage.setItem(tokenKey, token);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem(tokenKey);
    };

    const contextValue = {
        token: token,
        loggedIn: loggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;