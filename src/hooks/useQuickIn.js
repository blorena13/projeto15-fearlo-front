import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../context/InfoContext";

export default function useQuickIn() {
    const { token } = useContext(InfoContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) navigate("/homepage")
    }, []);
}