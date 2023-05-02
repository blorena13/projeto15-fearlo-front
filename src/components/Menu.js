import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Nav(){
    const navigate = useNavigate();

    function toBird(){
        navigate("/bird");
    }

    function toCat(){
        navigate("/cat");
    }

    function toDog(){
        navigate("/dog");
    }

    function toFish(){
        navigate("/fish");
    }

    return(
        <Menu>
            <MenuItem onClick={toDog}>Cachorro</MenuItem>
            <MenuItem onClick={toCat}>Gato</MenuItem>
            <MenuItem onClick={toBird}>Passarinho</MenuItem>
            <MenuItem onClick={toFish}>Peixe</MenuItem>
        </Menu>
    )
}

const MenuItem = styled.div`
    cursor: pointer;
    font-family: "Roboto";
    margin-left: 5%;
    :first-child{
        margin-left: 37%;
    } 
`;

const Menu = styled.div`
    display: flex;
    width: 100%;
    height: 55px;
    background-color: #F3D011;
    align-items: center;
    justify-content: start;
`;
