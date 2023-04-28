import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


input {
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    width: calc(100% - 30px);
    border: 1px solid #ccc;
    padding: 15px;
    margin: 1px;
    :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
    } 
}
form {
    display: flex;
    background-color: rgba(219, 112, 147, 0.5);
    padding: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 70%;
    border-radius: 5px;
    /* box-shadow: 2px 2px 3px 0px #555; */
}

button{
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: purple;
    font-size: 20px;
    font-weight: 600;
    color: black;
    cursor: pointer;
    width: 100%;
    padding: 12px;
}

a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: black;
        text-decoration: none;
        padding-top: 30px;
    }
`

export default GlobalStyle;