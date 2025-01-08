import CarsHomePage from "../../components/Carshome";
import { Container } from "../../styles/generalStyles";
import {
    ListCarContent,
    SearchArea,
    SearchBtn,
    SearchCar,
    Title
} from "../../styles/homeStyles";


export default function Home() {

    return (
        <Container>
            <SearchArea>
                <SearchCar type="text" placeholder="Digite o nome do carro..." />
                <SearchBtn>
                    Buscar
                </SearchBtn>
            </SearchArea>
            <Title>
                Carros novos e usados em todo o Brasil
            </Title>
            <ListCarContent>
                <CarsHomePage />
            </ListCarContent>
        </Container>
    )
}