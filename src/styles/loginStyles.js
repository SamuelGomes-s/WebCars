import styled from "styled-components";

const ContainerLogin = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;  
`;

const ContentLogin = styled.div`
    display: flex;
    position: relative;
    top: 25%;
    left: 0;
    right: 0;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width: 600px;
    @media screen and (max-width: 600px) {
        width: 70%
    }
`;
const Form = styled.form`
`;

const ContentForm = styled.div`
    background-color:rgb(255, 255, 255);
    padding: 0.8em;
    margin: 1.5em 0;
    width: 100%;
    border-radius: 8px;
`;

const Input = styled.input`
    width: 100%;
    height: 35px;
    padding: 0 15px;
    margin: 0.5em 0;
    border: 1px solid #878787;
    border-radius: 8px;
    box-shadow: 0 5px 2px rgba(136,136,136,0.4);
    outline: none;
`;

const SubmitBtn = styled.button`
    border: 0;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(5, 3, 3);
    color: #fff;
    font-weight:bold;
    padding: 1em;
    margin: 1em 0;
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.5s;
    &:hover{
        transform: scale(0.95);
        opacity: 0.9;
    }
    &:active{
        opacity: 0.80;
        transform: scale(1);
    }
    &:disabled{
        background-color:rgba(196, 196, 196, 0.39);
        color:rgb(240, 0, 0);
        cursor: not-allowed;
    }
`;

const ChangeTypeBtn = styled.a`
    cursor: pointer;
    user-select: none; 
    transition: all 0.5s;
    color: rgb(78, 77, 77);
    padding-bottom: 2.0em;
    &:hover{
        transform: scale(1.10);
    }
    &:active{
        opacity: 0.80;
        transform: scale(1);
    }
`;

const ErrorMessage = styled.span`
    color: #f00;
`;


export {
    ContainerLogin,
    Form,
    Input,
    ContentLogin,
    SubmitBtn,
    ContentForm,
    ChangeTypeBtn,
    ErrorMessage
}