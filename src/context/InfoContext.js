import { createContext } from "react";
import { useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [selected, setSelected] = useState([]);
    const [birdProducts, setBirdProducts] = useState([]);
    const [catProducts, setCatProducts] = useState([]);
    const [dogProducts, setDogProducts] = useState([]);
    const [fishProducts, setFishProducts] = useState([]);
    const [products,setProducts] = useState([]);
    const [searched, setSearched] = useState('');

    return (
        <InfoContext.Provider value={{user, setUser,  selected, setSelected, birdProducts, setBirdProducts, catProducts, setCatProducts, dogProducts, setDogProducts, fishProducts, setFishProducts, token, setToken, products, setProducts, searched, setSearched}}
        >
            {children}
        </InfoContext.Provider>
    )
}