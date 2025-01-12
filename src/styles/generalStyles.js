import styled from "styled-components"
import logoImg from "../assets/logo.svg"
import { Link } from "react-router-dom";

//Container para dar espaçamento  nas paginas conforme o header;

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
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
    Container, 
    Logo
}