import styled from "styled-components"
import Logo from "../../assets/Logo Fearlo.png"
import Produto from "../../assets/produto.png"
// import { useState } from "react"

export default function ShoppingCart({quant, setQuant, value}) {

  return (
    <Container>
        <h1>Sacola</h1>
      <Banner>
        <img src={Logo} alt="Logo Novamente" />
      </Banner>
      {/* inserir produtos com um MAP */}
      {/* Separar em componentes ainda */}
      <ProductAdded>
        <Produtc>
          <img src={Produto} alt="Ração de dog" />
          <p>Texto descrição do produto</p>
        </Produtc>       
        <Price>
          <p>R$ {quant < 0 ? "Error" : (quant*value).toFixed(2)}</p>
          <div>
            <button onClick={() => setQuant(quant - 1)}>-</button>
            <p>{quant}</p>
            <button onClick={() => setQuant(quant + 1)}>+</button>
          </div>
        </Price>
      </ProductAdded>
      <Suggestions>
        <h1>#Nome # Também pode gostar:</h1>
        <List>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </List>
      </Suggestions>
    </Container>
  )
}
const Container = styled.div`
  width: 70%;
  h1 {
    font-size: 35px;
    font-weight: bolder;
    font-family: 'Roboto';
    line-height: 50px;
    color: #454545;
  }
`
const Banner = styled.div`
  width: 100%;
  background-color: #c9c0c6a7;
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
    border: 1px solid #c9c0c6a7;
    border-radius: 10px;
`
const Produtc = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
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
    border-radius: 5px;
    button {
      width: 30px;
      border: none;
    }
  }
`
const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 300px;
  padding: 20px;
  margin: 30px 0;
  border: 1px solid #c9c0c6a7;
  border-radius: 10px;
`
const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    width: 100px;
    height: 100px;
    margin: 10px;
    background: #ca1a1a;
  }
`
