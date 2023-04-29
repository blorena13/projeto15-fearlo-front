import styled from "styled-components";
import Fearlo from "../assets/Logo Fearlo.png";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {searchOutline} from "ionicons/icons";
import {cartOutline} from "ionicons/icons";

export default function Header(){
    return(
        <Head>
            <Logo src={Fearlo} />
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
    }
`;

const Logo = styled.img`
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
`;

const Button = styled.button`
    width: 50px;
    height: 50px;
    background-color: #aed8e4;
`;

const Icon = styled(IonIcon)`
    font-size: 30px;
    margin-bottom: 30px;
`;
