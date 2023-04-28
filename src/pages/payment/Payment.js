import styled from "styled-components"
import Top from "./Top";
import ShoppingCart from "./ShoppingCart"
import Pay from "./Pay"


export default function Payment() {
  return (
    <Container>
      <Top/>
      <ShoppingCart/>
      <Pay/>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 170px;
  @media (max-width: 800px) {
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 50px;
    /* background: lightpink; */
  }
`