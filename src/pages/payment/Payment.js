import styled from "styled-components"
import Top from "./Top";
import ShoppingCart from "./ShoppingCart"
import Pay from "./Pay"
import { useContext, useState } from "react";
import Modal from "./Modal";
import { InfoContext } from "../../context/InfoContext";


export default function Payment() {
  const [isOpen, setIsOpen] = useState(false)
  const [cep, setCep] = useState()
  const {selected}= useContext(InfoContext)

  const total = selected.reduce((acc, item) => {    
    return acc + (item.quant*item.price)
  }, 0)

  return (
    <Container>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} total={total} cep={cep}/>
      <Top/>
      <ShoppingCart />
      <Pay 
        total={total} 
        setIsOpen={setIsOpen} 
        setCep={setCep}
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