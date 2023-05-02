import styled from "styled-components"
import Logo from "../../assets/Logo Fearlo.png"
import Produto from "../../assets/produto.png"
import { IonIcon } from "@ionic/react"
import {trash} from "ionicons/icons";
import { useContext } from "react";
import { InfoContext } from "../../context/InfoContext";


export default function ShoppingCart() {
  const {selected, setSelected}= useContext(InfoContext)
  const {products}= useContext(InfoContext)
  const {pet} = useContext(InfoContext)
  console.log(products)

  function addProduct(e) {
    const image = e.target.parentNode.querySelector('.ProductImage').src;
    const description = e.target.parentNode.querySelector('.ProductDescription').innerHTML
    const price = e.target.parentNode.querySelector('.ProductPrice').innerHTML
    const objetoAdicionado = {
      image: image, 
      text: description,
      price: parseFloat(price.replace("R$ ", "")).toFixed(2),
      quant: 1
    }
    const newList = [...selected, objetoAdicionado]
    setSelected(newList)
  }

  function removeItem(i) {
    const newSelected = selected.filter((item, index) => index !== i)
    setSelected(newSelected)
  }
  
  function handleQuant(i, value) {
    const newList = [...selected]
    newList[i].quant += value
    setSelected(newList)
  }

  return (
    <Container>
        <h1>Sacola</h1>
      <Banner>
        <img src={Logo} alt="Logo Novamente" />
      </Banner>
      {selected.map((p, index) => 
        <ProductAdded key={index}>
          <Product>
            <img src={p.image} alt={p.text} />
            <p>{p.text}</p>
          </Product> 
          <Price>
            <p>R$ {p.quant <= 0 ? "Error" : (p.quant*p.price).toFixed(2).replace(".",",")}</p>
            <div>
              <button onClick={() => handleQuant(index, -1)}>-</button>
              <p>{p.quant}</p>
              <button onClick={() => handleQuant(index, +1)}>+</button>
            </div>
          </Price>
          <Icon icon={trash} onClick={() => removeItem(index)} ></Icon>
        </ProductAdded>
      )}     
      <Suggestions>
        <h1>{pet} também pode gostar:</h1>
        <List>
        {products.map((product, index) => 
          <div key={index}>
          <img onClick={addProduct} src={product.image} alt="Ração Dog" className="ProductImage"/>
          <p className="ProductDescription">{product.description}</p>
          <p className="ProductPrice">R$ {product.price.toFixed(2).replace(".",",")}</p>
        </div>
        )}            
        </List>
      </Suggestions>
    </Container>
  )
}
const Container = styled.div`
  width: 70%;
  @media (max-width: 800px) {
    width: 100%;    
  }
  h1 {
    font-size: 35px;
    font-weight: bolder;
    font-family: 'Roboto';
    line-height: 50px;
    color: #454545;
  }
`
const Banner = styled.div`
  /* width: 100%; */
  background-color: white;
  border-radius: 10px;
  padding: 5px;  
  img {
    width: 150px;
  }  
`
const ProductAdded = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    background: white;
`
const Product = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  img {
      width: 80px;
    }
  p {
    font-family: 'Roboto';
    font-weight: bold;
    color: #454545;
  }
`
const Price = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 400px;
  p {
    font-family: 'Roboto';
    font-weight: bold;
    color: #454545;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100px;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #cfcfcf;
    button {
      width: 30px;
      font-size: 15px;
      font-weight: bolder;
      border: none;
      background-color: white;
    }
  }
`
const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* width: 100%; */
  min-height: 400px;
  padding: 20px;
  /* padding-bottom: 50px; */
  margin: 30px 0;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  background: white;
`
const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    justify-content: flex-start;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    margin: 10px;
    img {
      width: 100%;
    }
    p {
      font-family: 'Roboto';
      font-weight: bold;
      color: #454545;
      line-height: 25px;
    }
  }
`
const Icon = styled(IonIcon)`
  font-size: 30px;
  color: black;
`