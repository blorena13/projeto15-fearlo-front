import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import {addOutline} from "ionicons/icons";
import {removeOutline} from "ionicons/icons";
import Header from "../components/Header";
import Nav from "../components/Menu";
import { test_array } from "../components/test_array";

export default function Home(){

    return(
        <Container>
            <Header />
            <Aux />
            <Nav />
            <Products>
                {test_array.map((index) => {
                    return(
                        <ProductsCard>
                            <ProductImg src={index.img} />
                            <ProductDescription>{index.description}</ProductDescription>
                            <p>Preço Unitário: {index.price}</p>
                            <Quantity>
                                <Change icon={removeOutline} />
                                <p>0</p>
                                <Change icon={addOutline} />
                            </Quantity>
                        </ProductsCard>
                    )
                })}
            </Products>
        </Container>
    )
}



const Container = styled.div`
    width: 100%;
    background-color: #e5e5e5;
    height: 2800px;
`;

const Aux = styled.div`
    padding-bottom: 10em;
`;

const Products = styled.div`
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    height: 500px;
    margin-top: 25px;
`;

const ProductsCard = styled.div`
    background-color: #ffffff;
    width: 200px;
    height: 370px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;    
    border-radius: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    p{
        font-family: 'Roboto';
        font-size: 17px;
    }
    text-align: center;
`;

const ProductImg = styled.img`
    margin-top: 10px;
    border-radius: 18px;
    width: 80%;
    height: 40%;
`;

const ProductDescription = styled.p`
    margin: 0 auto;
    padding-top: 0px;
`;

const Quantity = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: #E31C79;
    justify-content: space-evenly;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

const Change= styled(IonIcon)`
    background-color: #F3D011;
    border-radius: 200px;
    font-size: 25px;
    position: relative;
    z-index: 1;
`;