import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { InfoContext } from "../context/InfoContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";

export default function SignIn(){

    const [form, setForm] = useState({email: "", password: ""})
    const {user, setUser}= useContext(InfoContext);
    const navigate = useNavigate();

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleLogin(e){
        e.preventDefault();

        const urlPost = `${process.env.REACT_APP_API_URL}/login`;
        const body = {email: form.email, password: form.password};

        const promise = axios.post(urlPost, body);
        promise.then(res => {
            const {token, id, pet, name, image } = res.data;
            setUser({token, id, pet, name, image});
            console.log(user);
            navigate("/homepage");
        });
        promise.catch(err => {
            console.log(err.response.data.mensagem);
        })


    }

    return(
        <SignInContainer>

            <form onSubmit={handleLogin}>
                <img src={logo} alt=""/>
                <input 
                required
                placeholder="E-mail"
                type="email"
                name="email"
                value={form.email}
                onChange={handleForm}
                />
                <input 
                required
                placeholder="Senha"
                autoComplete="new-password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleForm}
                />

                <button>Entrar</button>
            </form>

            <Link to={`/signUp`}> Primeira vez? Cadastre-se</Link>

        </SignInContainer>
    )
}

const SignInContainer = styled.section`
background-color: #F3D011;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
img{
    border-radius: 50%;
}
a {
    margin-bottom: 100px;
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    
}
input {
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    width: calc(100% - 30px);
    border: none;
    padding: 15px;
    margin: 1px;
    :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
    } 
}
form{
     display: flex;
    background-color: #F3D011;
    padding: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 70%;
    border-radius: 5px;
}
button{
     outline: none;
    border: none;
    border-radius: 5px;
    background-color: #E31C79;
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
    width: 100%;
    padding: 12px;
}
   
`