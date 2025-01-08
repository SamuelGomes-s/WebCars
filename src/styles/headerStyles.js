import styled from "styled-components";
import logoImg from "../assets/logo.svg"
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
    background-color: #f4f4f4;
    width: 100%;
    padding: 0.5em;
    max-height: 90px;
    margin-bottom: 15px;
    box-shadow: 10px 10px 5px rgba(136,136,136,0.4);
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    max-width: 1280px;
    margin: 0 auto;
`;

const ActionBtn = styled(Link)`
    display: flex;
    align-items: center;
    border: 0;
    padding:0;
    text-decoration:none;
    cursor: pointer;
    transition: all 0.5s;
    margin: 5px 0;
    &:hover{
        transform: scale(1.1);
        opacity: 0.9;
    }
    &:active{
        opacity: 0.80;
        color: #f00000;
    }
    
`;

const Logo = styled(Link)`
    background-image: url(${logoImg});    
    height: 45px;
    width: 200px;
    transition: all 0.5s;
    background-repeat: no-repeat;
    &:hover{
        cursor: pointer;
        opacity: 0.95;
        
        transform: scale(1.05);
    }
`;

export {
    HeaderContainer,
    HeaderContent,
    ActionBtn,
    Logo
}