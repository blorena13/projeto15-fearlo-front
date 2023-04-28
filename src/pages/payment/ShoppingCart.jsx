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
      <ProductAdded> 
        <Produtc>
          <img src={Produto} alt="Ração de dog" />
          <p>Texto descrição do produto</p>
        </Produtc>       
        <Price>
          <p>71,71</p>
          <div>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </Price>
      </ProductAdded>
    </Container>
  )
}
const Container = styled.div`
  /* width: 80%; */
  /* align-items: center; */
  margin: 0 auto;
  /* background: #000; */
  h1 {
    font-size: 35px;
    font-family: 'Roboto';
  }
`
const Banner = styled.div`
  width: 100%;
  background: lightgreen;
  border-radius: 10px;
  padding: 10px;  
  img {
    width: 200px;
  }  
`
const ProductAdded = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 20px 50px;
    /* background: #000; */
`
const Produtc = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  img {
      width: 80px;
    }
`
const Price = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 400px;
  div {
    display: flex;
    justify-content: space-between;
    width: 100px;
    /* height: 20px; */
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    /* background: #000; */
    button {
      width: 30px;
    }
  }

`
