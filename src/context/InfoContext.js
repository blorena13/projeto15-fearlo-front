import { createContext } from "react";
import { useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem("token"));

    return (
        <InfoContext.Provider value={{user, setUser, token, setToken}}
        >
            {children}
        </InfoContext.Provider>
    )
}