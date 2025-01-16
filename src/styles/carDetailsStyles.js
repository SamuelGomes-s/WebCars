import styled from "styled-components";

const Content = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1.2em;
    border-radius: 8px;
`;

const SendMsgBtn = styled.a`
    height: 50px;
    text-decoration:none;
    font-size: 20px;
    font-weight: bold;
    margin-top: 25px;
    background-color: #0d9515;
    border: 0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    
    transition:all 1s;
    gap: 20px;
    &:hover{
        transform: scale(0.95);
        opacity: 0.9;
    }
    &:active{
        background-color:rgb(2, 85, 16);
        transform: scale(1);
    }
`;

const CarName = styled.h1`
`;

const CarPrice = styled.h1`
`;

const CarModel = styled.span`
    color: #121212;
    padding: 15px 0;
    
`;

const Info = styled.span`
    font-size:20px;
    font-weight: bold;
`;

const InfoValue = styled.span`
    font-size:18px;
    padding: 5px 0;
    text-align: center;
`;

const Description = styled.p`
    min-height: 45px;
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
    letter-spacing: 1px;
    word-spacing: 3px;
    margin: 20px 0px;
    overflow-wrap: break-word;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

export {
    Content,
    SendMsgBtn,
    CarModel,
    CarName,
    CarPrice,
    Info,
    InfoValue,
    Description,
    Image,
}