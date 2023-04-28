import styled from "styled-components"
import Logo from "../../assets/LogoFearlo.png"
import Produto from "../../assets/produto.png"


export default function ShoppingCart() {
  return (
    <Container>
    <h1>Sacola</h1>
    <Banner>
      <img src={Logo} alt="Logo Novamente" />
    </Banner>
    <div>
      <ProductAdded>
        <div>
          <img src={Produto} alt="Ração de dog" />
          <p>Texto descrição do produto</p>
        </div>
      </ProductAdded>
    </div>
    </Container>
  
  )
}

const Container = styled.div`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 50px 0;
  h1 {
    padding-left: 30px;
    font-size: 40px;
    font-family: 'Roboto';
  }
`
const Banner = styled.div`
  display: flex;
  justify-content: center;
  background: lightgreen;
  border-radius: 10px;
  img {
    width: 300px;
  }
  
`

const ProductAdded = styled.div`
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }  
  img {
    width: 80px;
  }  
`
