import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { InfoContext } from "../context/InfoContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "/home/lorena/projeto15-fearlo-front/src/components/logo.png";
import logo1 from "/home/lorena/projeto15-fearlo-front/src/components/logo1.png";

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
        const body = {form};

        const promise = axios.post(urlPost, body);
        promise.then(res => {
            const {id, name, image } = res.data;
            setUser({id, name, image});
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
`