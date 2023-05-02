// import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"


export default function Pay({total, setIsOpen, setCep}) {
  const navigate = useNavigate() 

  function pay(e) {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <Container>
      <Form onSubmit={pay}>
        <label htmlFor="cep">Qual o CEP?</label>
        <input type="cep" placeholder="00000-000" onChange={(e) => setCep(e.target.value)}/>
        {/* <label htmlFor="text" onChange={(e) => setCupom(e.target.value)}>Cupom de desconto</label>
        <input type="text" placeholder="Digite seu cupom"/> */}
        <Resumo>
          <h2>Resumo do pedido</h2>
          <Total>
            <p>Total</p>
            <p>R$ {total.toFixed(2).replace(".",",")}</p>
          </Total>
          <Buttons>
            <button type="submit">Ir para o pagamento</button>
            <button onClick={() => navigate("/")}>escolher mais produtos</button>
          </Buttons>
        </Resumo>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  width: 40%;
  padding: 30px 20px;
  /* margin: 20px; */
  /* background: #000; */
  @media (max-width: 800px) {
    width: 90%;
    padding: 0px;
  }
  label {
    text-align: start;
    font-family: 'Roboto';
    font-weight: bolder;
    line-height: 30px;
    font-size: 20px;
    color: #454545;
  }
  input {
    width: 80%;
    /* margin: 0 auto; */
    margin-bottom: 25px;
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
    /* background: #000; */
  }
`
const Form = styled.form`
    width: 100%;
    /* display: flex;     */
    /* justify-content: center; */
    padding: 10px;
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: #F3D011;
    /* background: #000; */
`
const Resumo = styled.div`
  h2 {
    font-family: 'Roboto';
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }
  p {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: bold;
    color: #454545;
  }
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  padding: 0 20px;
`
const Buttons = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  button {
    /* width: 200px; */
    font-family: 'Roboto';
    margin: 10px 0;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #E31C79;
    font-size: 15px;
    font-weight: 500;
    color: #FFFFFF;
    cursor: pointer;
    width: 100%;
    padding: 12px;
  }

`