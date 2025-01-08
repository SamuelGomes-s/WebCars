import {
    CarImg,
    ContainerCars,
    ContentInfo,
    CarName,
    Price,
    TechnicalInfo,
    Info,
    City
} from "../../styles/carsHomeStyles";

export default function CarsHomePage() {

    return (
        <ContainerCars>
            <CarImg
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RK4FNCPv1kHNXX2dA5xeRKeqbpf7c8IgcA&s"
            />
            <ContentInfo>
                <CarName>Argo Drive</CarName>
                <TechnicalInfo>
                    <Info>
                        2016/2017 | 2000 km
                    </Info>
                </TechnicalInfo>
                <Price>R$ 69000</Price>
                <City>Carmo do Paranaiba</City>
            </ContentInfo>
        </ContainerCars>
    )
}