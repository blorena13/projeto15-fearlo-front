import styled from "styled-components"
import Top from "./Top";
import ShoppingCart from "./ShoppingCart"
import Pay from "./Pay"
import { useState } from "react";



export default function Payment() {
  const [quant, setQuant] = useState(1)
  const [value, setValue] = useState(71.71)

  return (
    <Container>
      <Top/>
      <ShoppingCart quant={quant} setQuant={setQuant} value={value}/>
      <Pay quant={quant} value={value}/>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 170px;
  /* background: #000; */
  /* height: 100%; */
  @media (max-width: 800px) {
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 50px;
    /* background: lightpink; */
  }
`