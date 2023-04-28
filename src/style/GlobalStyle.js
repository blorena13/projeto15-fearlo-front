import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

input {
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    width: calc(100% - 30px);
    border: none;
    /* border: 1px solid #ccc; */
    padding: 15px;
    margin: 1px;
    :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
    } 
}
form {
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

a {
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
        padding-top: 30px;
        font-family: 'Ubuntu', sans-serif;
    }
`

export default GlobalStyle;