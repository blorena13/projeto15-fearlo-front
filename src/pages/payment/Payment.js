import styled from "styled-components"
import Top from "./Top";
import ShoppingCart from "./ShoppingCart"
import Pay from "./Pay"
import { useState } from "react";
import Produto from "../../assets/produto.png"
import Modal from "./Modal";


export default function Payment() {
  const [isOpen, setIsOpen] = useState(false)
  const [cep, setCep] = useState()
  const [cupom, setCupom] = useState()
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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} sacola={sacola} total={total} cep={cep}/>
      <Top/>
      <ShoppingCart sacola={sacola} setSacola={setSacola} />
      <Pay 
        total={total} 
        setIsOpen={setIsOpen} 
        setCep={setCep} 
        // cupom={cupom}
        // setCupom={setCupom}
      />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
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