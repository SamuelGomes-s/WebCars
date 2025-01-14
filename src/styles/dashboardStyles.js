import { Link } from "react-router-dom";
import styled from "styled-components";

const DashboardHeader = styled.div`
    height: 45px;
    width: 100%;
    background-color:#f00000;
    border-radius: 8px;
    padding: 1.5em;
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 15px;
`;

const ItensHeader = styled(Link)`
    text-decoration: none;
    color: #fff;
    transition: all 0.5s;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
        text-decoration: underline;
    }
`

const LogOutBtn = styled.button`
    margin-left: auto;
    text-decoration: none;
    color: #fff;
    border: 0;
    background-color: transparent;
    transition: all 0.5s;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
        text-decoration: underline;
    }
`;

const FileInput = styled.input`
    opacity: 0;
    display:flex;
    cursor: pointer;
    width:100%;
    height:   130px;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
    margin:  0  0 20px 0;
    padding: 1.0em;
`

const Label = styled.label`
    margin: 10px 0;
    font-weight: bold;
    font-size: 18px;
`;

const Input = styled.input`
    width: 100%;
    height: 35px;
    padding: 0 15px;
    /* margin: 0.5em 0; */
    border: 1px solid #878787;
    border-radius: 8px;
    box-shadow: 0 5px 2px rgba(136,136,136,0.4);
    outline: none;`;

const TextArea = styled.textarea`
    height:90px;
    resize: none;
    padding: 1em;
    border: 1px solid #878787;
    border-radius: 8px;
    box-shadow: 0 5px 2px rgba(136,136,136,0.4);
    outline: none;
`;
const FileContent = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 130px;
    border: 1px solid #000;
    background-color: transparent;
    cursor: pointer;
    z-index: 1;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 5px 2px rgba(136,136,136,0.4);
        color: #f00;
    }
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
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
        transform: scale(0.98);
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

const ErrorMessage = styled.span`
    color: #f00;
    padding: 0.5em;
`;

const Image = styled.img`
    object-fit: cover;
    height: 130px;
`;

const ContainerImage = styled.div`
    display:flex;
    flex-direction: row;
    position: relative;
    margin:  0 10px ;
    height: 130px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 5px 2px rgba(136,136,136,0.4);
    }
`;

const DeleteBtn = styled.button`
    cursor: pointer;
    position: absolute;
    border: 0;
    background-color: transparent;
`;





export {
    DashboardHeader,
    ItensHeader,
    LogOutBtn,
    FileInput,
    Content,
    Label,
    Input,
    TextArea,
    Form,
    SubmitBtn,
    FileContent,
    ErrorMessage,
    ContainerImage,
    Image,
    DeleteBtn
}