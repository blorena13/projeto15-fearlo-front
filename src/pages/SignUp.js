import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "/home/lorena/projeto15-fearlo-front/src/components/logo.png";

export default function SignUp(){

    const [form, setForm] = useState({name: "", email: "", password: "", confirmPassword: ""});
    const navigate = useNavigate();

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function submitForm(e){
        e.preventDefault();

        if(form.password !== form.confirmPassword) return alert("As senhas não são iguais!");

        delete form.confirmPassword;


        const urlPost = `${process.env.REACT_APP_API_URL}/signUp`;
        const body = { form };

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
`