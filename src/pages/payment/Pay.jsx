import styled from "styled-components"

export default function Pay() {
  return (
    <Container>
      <form action="">
        <label htmlFor="cep">Qual o CEP?</label>
        <input type="cep" placeholder="00000-000"/>
        <label htmlFor="text">Cupom de desconto</label>
        <input type="text" placeholder="Digite seu cupom"/>
      </form>
      <Resumo>
        <p>Resumo do pedido</p>
        <Value>
          <p>Valor dos produtos (1 item)</p>
          <p>71,71</p>
        </Value>
        <Total>
          <p>Total</p>
          <p>71,71</p>
        </Total>
        <Buttons>
          <button>Ir para o pagamento</button>
          <button>escolher mais produtos</button>
        </Buttons>
      </Resumo>
    </Container>
  )
}

const Container = styled.div`
/* background: #000; */
  form {
    width: 100%;
  }
  label {
    width: 100%;
    text-align: start;
    font-family: 'Roboto';
    font-weight: bolder;
    font-size: 20px;
  }
  input {
    width: 100%;
    margin-bottom: 10px;
  }
`
const Resumo = styled.div`
  p {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: bold;
  }
`
const Value = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`
const Buttons = styled.div`
  button {
    font-family: 'Roboto';
    margin: 10px 0;
    color: white;
  }

`