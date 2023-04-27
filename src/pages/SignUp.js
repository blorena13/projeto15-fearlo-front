import styled from "styled-components";
import { Link } from "react-router-dom";

export default function signUp(){
    return (
        <SignUpContainer>
            <form>
                {/* se quiser colocar logo vai ser por aqui  */}
                <input
                required
                placeholder="Nome"
                type="text"
                />
                <input 
                required
                placeholder="E-mail"
                type="email"
                />
                <input 
                required
                placeholder="Senha"
                type="password"
                autoComplete="new-password"
                />
                <input
                required
                placeholder="Confirme a senha"
                type="password"
                autoComplete="new-password"
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
background-color: pink;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
`