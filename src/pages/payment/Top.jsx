import styled from "styled-components"
import Logo from "../../assets/Logo Fearlo.png"
import ShoppingCart from "./ShoppingCart"
import Pay from "./Pay"


export default function Top() {
  return (
    <>
      <Header>
        <img src={Logo} alt="logo Fearlo"/>
        <Safe>
          <ion-icon name="lock-closed-outline"></ion-icon>
          <p>Ambiente Seguro</p>
        </Safe> 
      </Header>
      <Container>
        <ShoppingCart/>
        <Pay/>
      </Container>
          
    </>

  )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: lightblue;
  img {
    width: 300px;
  }
`
const Safe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-left: 1px solid black;
  p {
    font-size: 30px;
    font-family: "Roboto";
  }
  ion-icon {
    font-size: 25px;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 40px;
`;