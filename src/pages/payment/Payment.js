import styled from "styled-components"
import Top from "./Top";
import ShoppingCart from "./ShoppingCart"
import Pay from "./Pay"
import { useState } from "react";
import Produto from "../../assets/produto.png"


export default function Payment() {
  const [sacola, setSacola] = useState([
    {
      image: Produto, 
      text: "Texto descrição do produto",
      price: 71.71,
      quant: 1
    }
  ])

  const total = sacola.reduce((acc, item) => {    
    return acc + (item.quant*item.price)
  }, 0)

  return (
    <Container>
      <Top/>
      <ShoppingCart sacola={sacola} setSacola={setSacola} />
      <Pay total={total}/>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  padding-top: 170px;
  min-width: 500px;
  background: lightyellow;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`