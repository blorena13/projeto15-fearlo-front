import styled from "styled-components";
import Fearlo from "../assets/Logo Fearlo.png";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {searchOutline} from "ionicons/icons";
import {cartOutline} from "ionicons/icons";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();

    function toHome(){
        navigate("/")
    }

    return(
        <Head>
            <Logo onClick={toHome} src={Fearlo} />
            <Search>
                <SearchBar />
                <Button>
                    <Icon icon={searchOutline} />
                </Button>
            </Search>
            <p>Faça <Link to={"/signIn"}>LOGIN</Link></p>
            <p>Crie seu <Link to={"/signUp"}>CADASTRO</Link></p>
            <Link to={"/payment"}>
                <Icon icon={cartOutline} />
            </Link>
        </Head>
    )
}

const Head=  styled.div`
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 10em !important;
    background-color: #aed8e4;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p{
        width: 133.5px;
        font-family: 'Roboto';
        text-decoration: none;
    }
    a{
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
`;

const Logo = styled.img`
    cursor: pointer;
    width: 300px;
`;

const Search = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
`;

const SearchBar = styled.input`
    width: 90%;
    margin-right: 2%;
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
    } 
`;

const Button = styled.button`
    width: 50px;
    height: 50px;
    background-color: #aed8e4;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled(IonIcon)`
    font-size: 30px;
`;
