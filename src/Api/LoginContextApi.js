import React,{createContext, useContext, useState} from "react";

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

function LoginContextProvider(props){
    const [loggedIn,setLoggedIn] = useState(false);
    
    const login = {loggedIn,setLoggedIn}
    return (
        <LoginContext.Provider value={login}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;