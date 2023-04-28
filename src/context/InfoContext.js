import { createContext } from "react";
import { useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {

    const [user, setUser] = useState({});

    return (
        <InfoContext.Provider value={{user, setUser}}
        >
            {children}
        </InfoContext.Provider>
    )
}