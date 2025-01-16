import {
    useContext,
    useEffect,
    useState
} from 'react'
import {
    DashboardHeader,
    ItensHeader,
    ListCarContent,
    LogOutBtn
} from '../../styles/dashboardStyles'
import { Container } from '../../styles/generalStyles'
import { AuthContext } from '../../contexts/authContext'
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    where
} from 'firebase/firestore'
import {
    db,
    storage
} from '../../services/Firebase/firebaseConnection'
import CarsDash from '../../components/Carshome/CarsDash'
import {
    deleteObject,
    ref
} from 'firebase/storage'
import { toast } from 'react-toastify'

export default function Dashboard() {

    const { logOut } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const [cars, setCars] = useState([])

    async function handleLogout() {
        await logOut()
    }

    useEffect(() => {
        async function loadCars() {
            const carRef = collection(db, 'cars')
            const q = query(carRef, where('uid', '==', user?.uid))
            const querySnapshot = await getDocs(q)
            const carList = []
            querySnapshot.forEach(doc =>
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
            )
            setCars(carList)
        }
        loadCars()
    }, [])

    async function handleDeleteCars(id, images) {
        const currentUser = user?.uid
        Promise.all(
            images.map(async (img) => {
                const imageRef = ref(storage, `images/${currentUser}/${img.name}`)
                return deleteObject(imageRef).catch((error) => {
                    toast.error(error.message)
                })
            })
        ).then(async () => {
            const docRef = doc(db, 'cars', id)
            const response = await deleteDoc(docRef).then(() => {
                setCars(cars.filter(car => car.id !== id))
                toast.success("Carro excluído com sucesso!")
            })
        }).catch((error) => {
            console.error(error.message);
            toast.error("Erro ao excluir o carro: " + error.message)
        })
    }
    return (
        <Container>
            <DashboardHeader>
                <ItensHeader to={'/dashboard'}>
                    Dashboard
                </ItensHeader>
                <ItensHeader to={'/dashboard/new'}>
                    Novo carro
                </ItensHeader>
                <LogOutBtn onClick={handleLogout}> Sair da conta</LogOutBtn>
            </DashboardHeader>
            <ListCarContent>
                {cars.map(item => (< CarsDash key={item.id} car={item} deleteCar={handleDeleteCars} />))}
            </ListCarContent>
        </Container>
    )
}