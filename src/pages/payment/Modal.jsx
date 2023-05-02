import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../../context/InfoContext";
import { IonIcon } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";


export default function Modal({isOpen, setIsOpen, total, cep}) {
  const {selected, setSelected}= useContext(InfoContext)
  const {user}= useContext(InfoContext)
  const navigate = useNavigate()
  const { username, token} = user;

  function buy() {
    const lista = {selected, username: username, token: token, cep: cep, total: (total).toFixed(2)}
    console.log(lista)
    axios.post(`${process.env.REACT_APP_API_URL}/payment`, lista)
      .then((res) => {
        console.log(res.data)
        alert("Compra concluída com sucesso!")
        setSelected()
        navigate("/")
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }


  return (
    <ModalIsOpen isOpen={isOpen}>
      <Icon icon={closeCircleOutline} onClick={() => setIsOpen(false)}></Icon>
      <Content>
        {selected.map((item, index) =>
          <Item key={index}>
            <p>{item.text}</p>
            <p>{item.quant}</p>
            <p>{item.price}</p>
          </Item>        
        )}
        <h1>TOTAL: {(total).toFixed(2)}</h1>
        <button onClick={buy}>Finalizar compra</button>             
      </Content>
    </ModalIsOpen>
  )
}

const ModalIsOpen = styled.div`
  display: ${(props) => props.isOpen === true ? "flex": "none"};
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
  opacity: 95%;
  background: #706b6b;
  ion-icon {
    margin-left: 70%;
    font-size: 30px;
  }
`
const Content = styled.div`
  width: 70%;
  height: 900px;
  text-align: center;
  padding: 50px;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 20px;
  background: #ffffff;
  h1 {
    width: 100%;
    text-align: end;
    font-family: 'Roboto';
    font-weight: bolder;
    padding-right: 15%;
    margin-top: 20px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 40px auto 0 auto;
    padding: 10px;
    border-radius: 10px;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: #149e14;
  }
`

const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid black;
  justify-content: space-around;
  p {
    width: 300px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bolder;
  }

`

const Icon = styled(IonIcon)`
  font-size: 30px;
  color: white;
`
