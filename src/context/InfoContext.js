import { createContext } from "react";
import { useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [selected, setSelected] = useState([]);
    const [birdProducts, setBirdProducts] = useState([]);
    const [catProducts, setCatProducts] = useState([]);
    const [dogProducts, setDogProducts] = useState([]);
    const [fishProducts, setFishProducts] = useState([]);

    return (
        <InfoContext.Provider value={{user, setUser, selected, setSelected, birdProducts, setBirdProducts, catProducts, setCatProducts, dogProducts, setDogProducts, fishProducts, setFishProducts}}
        >
            {children}
        </InfoContext.Provider>
    )
}