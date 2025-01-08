import styled from "styled-components";

const SearchCar = styled.input`
    width: 80%;
    height: 40px;
    padding: 0 15px;
    border: 1px solid #878787;
    border-radius: 8px;
`;

const SearchBtn = styled.button`
    border: 0;
    width: 20%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 1.2rem;
    background-color:rgb(245, 45, 45);
    color: #fff;
    font-weight:bold;
    padding: 1em;
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
`;

const SearchArea = styled.div`
    background-color:rgb(255, 255, 255);
    padding: 0.5rem;
    border-radius: 8px;
    /* height: 55px; */
    width: 80%;
    margin:auto;
    display: flex;
    align-items:center;
    justify-content: space-between;
`;

const Title = styled.h2`
    display: flex;
    padding: 1.5em;
    color: #000;
    font-size: 20px;
    justify-content: center;
`;

const ListCarContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export {
    SearchCar,
    SearchBtn,
    SearchArea,
    Title,
    ListCarContent
}
