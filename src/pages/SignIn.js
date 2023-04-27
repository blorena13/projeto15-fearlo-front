import styled from "styled-components";
import { Link } from "react-router-dom";

export default function signIn(){
    return(
        <SignInContainer>

            <form>
                {/* se for fazer a logo é aqui */}
                <input 
                required
                placeholder="E-mail"
                type="email"
                />
                <input 
                required
                placeholder="Senha"
                autoComplete="new-password"
                type="password"
                />

                <button>Entrar</button>
            </form>

            <Link to={`/signUp`}> Primeira vez? Cadastre-se</Link>

        </SignInContainer>
    )
}

const SignInContainer = styled.section`
background-color: pink;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
`