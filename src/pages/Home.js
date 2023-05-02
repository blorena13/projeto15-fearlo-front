import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { useState, useContext } from "react";
import Header from "../components/Header";
import Nav from "../components/Menu";
import {cartOutline} from "ionicons/icons";
//import { test_array } from "../components/test_array";
import axios from "axios";
import { InfoContext } from "../context/InfoContext";

export default function Home(){
    const [products,setProducts] = useState([]);
    const {selected, setSelected, setBirdProducts, setCatProducts, setDogProducts, setFishProducts} = useContext(InfoContext);
    const promise = axios.get("http://localhost:5000/");
    let bird = [];
    let cat = [];
    let dog = [];
    let fish = [];

    promise.then(res =>{
        setProducts(res.data);
        for(let i = 0; i< products.length; i++){
            if(products[i].type === "bird"){
                bird.push(products[i]);
            } else if(products[i].type === "cat"){
                cat.push(products[i]);
            } else if(products[i].type === "dog"){
                dog.push(products[i]);
            } else{
                fish.push(products[i]);
            }
            setBirdProducts(bird);
            setCatProducts(cat);
            setDogProducts(dog);
            setFishProducts(fish);
        }
    }).catch(err => {
        console.log(err)
    })

    function checkArray(obj, arr) {
        const index = arr.findIndex(item => JSON.stringify(item) === JSON.stringify(obj));
        if (index !== -1) {
          arr.splice(index, 1);
        } else {
          arr.push(obj);
        }
        return arr;
      }
      
    function changeCart(price, image, description){
        let add = selected;
        const obj = {
            price: price,
            image: image,
            description: description,
            quantity: 1
        }
        console.log(obj);
        let final = checkArray(obj, add);
        setSelected(final);
        console.log(selected);
    }

    return(
        <Container>
            <Header />
            <Aux />
            <Nav />
            <Products>
                {products.map((index, i) => {
                    return(
                        <ProductsCard key={i}>
                            <ProductImg src={index.image} />
                            <ProductDescription>{index.description}</ProductDescription>
                            <p>Preço Unitário: R$ {index.price}</p>
                            <Quantity onClick={() => changeCart(index.price, index.image, index.description)}>
                                <p>Adicione ao Carrinho</p>
                                <Change icon={cartOutline} />
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
    background-image: linear-gradient(245deg, #E31C79, #F3D011);
    justify-content: space-evenly;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

const Change= styled(IonIcon)`
    border-radius: 200px;
    font-size: 25px;
    position: relative;
    z-index: 1;
`;