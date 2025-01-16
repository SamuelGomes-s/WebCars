import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerCars = styled(Link)`
    background-color: #fff;
    position: relative;
    width:400px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin:  0.5em ;
    text-decoration: none;
    color: #000;
    transition: all 0.5s;
    &:hover{
        box-shadow: 10px 10px 5px rgba(136,136,136,0.4);
        transform: scale(1.02)
    }
    z-index: 1;
`;

const CarImg = styled.img`
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    display: block;
    object-fit:  cover;
    width:100%;
    height: 250px;
`;

const ContentInfo = styled.div`
    padding: 0.5em;
    display: flex;
    flex-direction: column;
`;

const CarName = styled.span`
    padding: 0.2em 0;
    color: #000;
    font-weight:  600;
`;

const Price = styled.h3`
    padding: 0.5em 0 0.3em 0;
    border-bottom: 1px solid #878787;
`;

const TechnicalInfo = styled.div`
    display: flex;
    flex-direction: row;
`;

const Info = styled.span`
    color: #000;
`;

const City = styled.span`
    padding: 0.5em 0;
`;

const ActionBtn = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* right: 10px; */
    z-index: 99;
    background-color: #fff;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: ease-in-out 0.5s;
    &:hover{
        transform: scale(1.2);
        color: #f00;
    }
`;

export {
    ContainerCars,
    CarImg,
    ContentInfo,
    Price,
    CarName,
    TechnicalInfo,
    Info,
    City,
    ActionBtn
}