import {
    useEffect,
    useState
} from 'react'
import {
    CarName,
    CarPrice,
    Content,
    Info,
    InfoValue,
    Description,
    SendMsgBtn,
    CarModel,
    Image
} from '../../styles/carDetailsStyles'
import { Container } from '../../styles/generalStyles'
import { FaWhatsapp } from 'react-icons/fa'
import {
    useNavigate,
    useParams
} from 'react-router-dom'
import { toast } from 'react-toastify'
import {
    doc,
    getDoc
} from 'firebase/firestore'
import { db } from '../../services/Firebase/firebaseConnection'
import {
    Swiper,
    SwiperSlide
} from 'swiper/react'

export default function CarDetail() {

    const [car, setCar] = useState({})
    const navigation = useNavigate()
    const [sliderPerview, setSliderPerview] = useState(2)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        async function loadCar() {
            try {
                const docRef = doc(db, 'cars', id)
                const snapDoc = await getDoc(docRef)
                if (!snapDoc.data()) {
                    return navigation('/')
                }
                let carData = {
                    city: snapDoc.data().city,
                    description: snapDoc.data().description,
                    images: snapDoc.data().images,
                    km: snapDoc.data().km,
                    model: snapDoc.data().model,
                    name: snapDoc.data().name,
                    owner: snapDoc.data().owner,
                    price: snapDoc.data().price,
                    uid: snapDoc.data().uid,
                    whatsapp: snapDoc.data().whatsapp,
                    year: snapDoc.data().year,
                }
                setCar(carData)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            }
        }
        loadCar()
    }, [id])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 720) {
                setSliderPerview(1)
            } else {
                setSliderPerview(2)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    if (loading) {
        return (
            <Container>
                <Info style={{ fontSize: 35, display: 'flex', justifyContent: 'center' }}>Carregando...</Info>
            </Container>
        )
    }

    return (
        <Container>
            {car && (<Swiper
                slidesPerView={sliderPerview}
                pagination={{ clickable: true }}
                navigation
            >
                {
                    car.images.map((item) =>
                        <SwiperSlide key={item.name}>
                            <Image
                                src={item.url}
                                alt='Imagem do veiculo'
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>)}
            <Content>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CarName>{car.name}</CarName>
                    <CarPrice>R$ {car.price}</CarPrice>
                </div>
                <CarModel>
                    {car.model}
                </CarModel>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 25, marginBottom: 15 }} >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Info>
                            Cidade
                        </Info>
                        <InfoValue>
                            {car.city}
                        </InfoValue>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Info>
                            Ano/Mod
                        </Info>
                        <InfoValue>
                            {car.year}
                        </InfoValue>
                    </div>
                </div>
                <Info>
                    Descrição
                </Info>
                <Description>
                    {car.description}
                </Description>
                <Info>
                    Celular/Whatsapp
                </Info>
                <InfoValue style={{ textAlign: 'initial' }}>
                    {car.whatsapp}
                </InfoValue>
                <SendMsgBtn
                    href={`https://api.whatsapp.com/send?phone=${car.whatsapp}`}
                    target={'_blank'}
                > Enviar mensagem whatsapp <FaWhatsapp size={25} /></SendMsgBtn>
            </Content>
        </Container>
    )
}