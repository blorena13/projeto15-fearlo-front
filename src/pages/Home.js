import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { useContext } from "react";
import Header from "../components/Header";
import Nav from "../components/Menu";
import {cartOutline} from "ionicons/icons";
import axios from "axios";
import { InfoContext } from "../context/InfoContext";

export default function Home(){
    const url = `${process.env.REACT_APP_API_URL}`
    console.log(url);
    const {selected, setSelected, setBirdProducts, setCatProducts, setDogProducts, setFishProducts, products, setProducts} = useContext(InfoContext);
    const promise = axios.get(url);
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
      
    function changeCart(obj){
        let add = selected;
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
                    let text = '';
                    let color = '';
                    const obj = {
                        price: index.price,
                        image: index.image,
                        description: index.description,
                        quantity: 1
                    }
                    const contains = selected.findIndex(item => JSON.stringify(item) === JSON.stringify(obj));
                    if(contains !== -1){
                        text = 'Remova do Carrinho';
                        color = '#E31C79'
                    } else{
                        text = 'Adicione ao Carrinho';
                        color = '#F3D011';
                    }

                    return(
                        <ProductsCard key={i}>
                            <ProductImg src={index.image} />
                            <ProductDescription>{index.description}</ProductDescription>
                            <p>Preço Unitário: R$ {index.price}</p>
                            <Quantity color={color  } onClick={() => changeCart(obj)}>
                                <p>{text}</p>
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
    background-color: ${props => props.color};
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