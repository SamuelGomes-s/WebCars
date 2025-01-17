import { useEffect, useState } from "react";
import CarsHomePage from "../../components/Carshome";
import { Container } from "../../styles/generalStyles";
import {
    ListCarContent,
    SearchArea,
    SearchBtn,
    SearchCar,
    Title
} from "../../styles/homeStyles";
import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where
} from "firebase/firestore";
import { db } from "../../services/Firebase/firebaseConnection"
import { toast } from "react-toastify";

export default function Home() {

    const [cars, setCars] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadCars()
        return () => {
            loadCars()
        }
    }, [])

    async function loadCars() {
        try {
            const carsRef = collection(db, 'cars')
            const q = query(carsRef, orderBy('createdAt', 'desc'))
            const querySnapshot = await getDocs(q)
            let carList = []
            querySnapshot.forEach(doc => {
                carList.push({
                    id: doc.id,
                    name: doc.data().name,
                    model: doc.data().model,
                    year: doc.data().year,
                    km: doc.data().km,
                    price: doc.data().price,
                    owner: doc.data().owner,
                    uid: doc.data().uid,
                    city: doc.data().city,
                    whatsapp: doc.data().whatsapp,
                    description: doc.data().description,
                    images: doc.data().images
                })
            })
            setCars(carList)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
            setLoading(false)
        }
    }

    async function handleSearchCar() {
        if (!input) {
            return
        }
        setLoading(true)
        try {
            console.log(input.toUpperCase())
            const carsRef = collection(db, 'cars')
            const q = query(carsRef,
                where('name', '>=', input.toUpperCase()),
                where('name', '<=', input.toUpperCase() + '\uf8ff')
            )
            const querySnapshot = await getDocs(q)
            if (querySnapshot.empty) {
                return loadCars()
            }
            let carList = []
            querySnapshot.forEach(doc => {
                carList.push({
                    id: doc.id,
                    name: doc.data().name,
                    model: doc.data().model,
                    year: doc.data().year,
                    km: doc.data().km,
                    price: doc.data().price,
                    owner: doc.data().owner,
                    uid: doc.data().uid,
                    city: doc.data().city,
                    whatsapp: doc.data().whatsapp,
                    description: doc.data().description,
                    images: doc.data().images
                })
            })
            setCars(carList)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <Container>
                Carregando...
            </Container>
        )
    }

    return (
        <Container>
            <SearchArea>
                <SearchCar
                    type="text"
                    placeholder="Digite o nome do carro..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <SearchBtn onClick={handleSearchCar}>
                    Buscar
                </SearchBtn>
            </SearchArea>
            <Title>
                Carros novos e usados em todo o Brasil
            </Title>
            <ListCarContent>
                {cars.map(item => (< CarsHomePage key={item.id} car={item} />))}
            </ListCarContent>
        </Container>
    )
}