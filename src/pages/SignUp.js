import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SignUp(){

    const [form, setForm] = useState({name: "", pet: "", image: "", email: "", password: "", confirmPassword:"" });
    const navigate = useNavigate();

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function submitForm(e){
        e.preventDefault();

        if(form.password !== form.confirmPassword) return alert("As senhas não são iguais!");

        delete form.confirmPassword;


        const urlPost = `${process.env.REACT_APP_API_URL}/signUp`;
        const body = { name: form.name, pet: form.pet, image: form.image, email: form.email, password: form.password };

        const promise = axios.post(urlPost, body);
        promise.then(res => {
            navigate("/");
        });
        promise.catch(err => {
            console.log(err.response.data.mensagem);
        })
    }

    

    return (
        <SignUpContainer>
            <form onSubmit={submitForm}>
            <img src={logo} alt=""/>
                <input
                required
                placeholder="Nome"
                type="text"
                name="name"
                value={form.name}
                onChange={handleForm}
                />
                 <input
                required
                placeholder="Nome do pet"
                type="text"
                name="pet"
                value={form.pet}
                onChange={handleForm}
                />
                <input
                required
                placeholder="Imagem"
                type="Imagem"
                name="image"
                value={form.image}
                onChange={handleForm}
                />
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
                type="password"
                autoComplete="new-password"
                name="password"
                value={form.password}
                onChange={handleForm}
                />
                <input
                required
                placeholder="Confirme a senha"
                type="password"
                autoComplete="new-password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleForm}
                />

                <button type="submit">Cadastrar</button>
            </form>

            <Link to="/">
                Já tem uma conta? Entre agora!
            </Link>

        </SignUpContainer>
    )
}

const SignUpContainer = styled.section`
background-color: #F3D011;
height: 100vh;
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