import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../context/InfoContext";

export default function useQuickOut(){
    const {token} = useContext(InfoContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) navigate("/")
    },[]);
    // COLOCAR NA TELA HOMEPAGE ANTES DA REQUISIÇÃO
}