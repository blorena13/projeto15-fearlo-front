import styled from "styled-components";

export default function Nav(){
    return(
        <Menu>
        <MenuItem>Cachorro</MenuItem>
        <MenuItem>Gato</MenuItem>
        <MenuItem>Passarinho</MenuItem>
        <MenuItem>Peixe</MenuItem>
    </Menu>
    )
}

const MenuItem = styled.div`
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
