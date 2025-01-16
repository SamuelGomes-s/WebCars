import { useState } from "react";
import {
    CarImg,
    ContainerCars,
    ContentInfo,
    CarName,
    Price,
    TechnicalInfo,
    Info,
    City,
    ActionBtn
} from "../../../styles/carsHomeStyles";
import { FaRegTrashCan } from "react-icons/fa6";

export default function CarsDash({ car, deleteCar }) {
    const [loadImg, setLoadImg] = useState([])

    function handleImageLoad(id) {
        setLoadImg(img => [...img, id])
    }

    async function handleDelete(id, images) {
        await deleteCar(id, images)
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
            <ActionBtn onClick={(e) => {
                //evitar que a funcionalidade para excluir, acione o evento do LINK do router-dom seja chamado. 
                e.preventDefault()
                e.stopPropagation()
                handleDelete(car.id, car.images)
            }}>
                <FaRegTrashCan size={28} />
            </ActionBtn>
        </ContainerCars>
    )
}