import { useState } from "react";
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

export default function CarsHomePage({ car }) {
    const [loadImg, setLoadImg] = useState([])
    function handleImageLoad(id) {
        setLoadImg(img => [...img, id])
    }
    return (
        <ContainerCars to={`/car/${car.id}`}>
            <div
                style={{
                    width: '100%',
                    height: '250px',
                    backgroundColor: '#fff',
                    display: loadImg ? 'none' : 'block',
                    border: "1px solid rgba(136,136,136)",
                }}
            >
            </div>
            <CarImg
                src={car.images[0].url}
                alt="Foto do veiculo"
                style={{ display: loadImg ? 'block' : 'none' }}
                onLoad={() => handleImageLoad(car.id)}
            />
            <ContentInfo>
                <CarName>{car.name}</CarName>
                <TechnicalInfo>
                    <Info>
                        {car.year} | {car.km}
                    </Info>
                </TechnicalInfo>
                <Price>R$ {car.price}</Price>
                <City>{car.city}</City>
            </ContentInfo>
        </ContainerCars>
    )
}