import styled from "styled-components"
import Logo from "../../assets/Logo Fearlo.png"


export default function Top() {
  return (
      <Header>
        <img src={Logo} alt="logo Fearlo"/>
        <Safe>
          <ion-icon name="lock-closed-outline"></ion-icon>
          <p>Ambiente Seguro</p>
        </Safe> 
      </Header>
  )
}

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  img {
    max-width: 300px;
  }
  @media (max-width: 600px) {
    justify-content: center;
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
  @media (max-width: 600px) {
    display: none;
  }
`
