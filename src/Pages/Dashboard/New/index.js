import { AuthContext } from "../../../contexts/authContext"
import { Container } from "../../../styles/generalStyles"
import {
    ContainerImage,
    Content,
    DashboardHeader,
    DeleteBtn,
    ErrorMessage,
    FileContent,
    FileInput,
    Form,
    Image,
    Input,
    Label,
    SubmitBtn,
    TextArea
} from "../../../styles/dashboardStyles"
import { ItensHeader } from "../../../styles/dashboardStyles"
import { LogOutBtn } from "../../../styles/dashboardStyles"
import {
    useContext,
    useState
} from "react"
import { FaUpload } from "react-icons/fa"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { v4 as uuidv4 } from "uuid"
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes
} from "firebase/storage"
import { db, storage } from "../../../services/Firebase/firebaseConnection"
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify"
import {
    addDoc,
    collection
} from "firebase/firestore"

const schema = z.object({
    name: z.string().nonempty('O nome do veiculo é obrigatorio'),
    model: z.string().nonempty('O modelo do veiculo é obrigatorio'),
    year: z.string().nonempty('O ano do veiculo é obrigatorio'),
    km: z.string().nonempty('A km do veiculo é obrigatoria'),
    price: z.string().nonempty('O valor do veiculo é obrigatorio'),
    city: z.string().nonempty('A cidade é obrigatoria'),
    whatsapp: z.string().min(1, "O Telefone é obrigatório").refine((value) => /^(\d{11,12})$/.test(value), {
        message: "Numero de telefone invalido."
    }),
    description: z.string().nonempty('A descrição é obrigatoria'),
})

export default function New() {

    const { handleSubmit, reset, register, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    })
    const [carImages, setCarImages] = useState([])
    const [loading, setLoading] = useState(false)
    const { logOut, user } = useContext(AuthContext)

    async function handleLogout() {
        await logOut()
    }

    async function handleFile(e) {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0]
            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                await handleUpload(image)
                return
            } else {
                alert("Envie um arquivo jpeg ou png.")
                return
            }
        }
    }

    async function handleUpload(image) {
        if (!user?.uid) {
            return
        }
        try {
            const currentUser = user?.uid
            const uidImg = uuidv4()
            const imageRef = ref(storage, `images/${currentUser}/${uidImg}`)
            const snap = await uploadBytes(imageRef, image)
            const url = await getDownloadURL(snap.ref).catch((err) => console.log(err))
            const imageItem = {
                name: uidImg,
                uid: currentUser,
                previewUrl: URL.createObjectURL(image),
                url: url
            }
            setCarImages((images => [...images, imageItem]))
        } catch (error) {
            console.log(error.message)
        }
    }

    async function handleDelete(item) {
        try {
            const itemRef = ref(storage, `images/${user?.uid}/${item}`)
            await deleteObject(itemRef)
            setCarImages(
                carImages.filter((img) => img.name !== item)
            )
        } catch (error) {
            console.log(error.message)
        }
    }


    async function onSubmit(data) {
        if (carImages.length === 0) {
            toast.error('A imagem do veiculo é obrigatoria. Adicione no minimo uma imagem.')
            return
        }
        setLoading(true)
        try {
            const carListImages = carImages.map(car => {
                return {
                    name: car.name,
                    uid: car.uid,
                    url: car.url
                }
            })
            const response = await addDoc(collection(db, 'cars'), {
                name: data.name.toUpperCase(),
                model: data.model,
                year: data.year,
                km: data.km,
                price: data.price,
                owner: user?.name,
                createdAt: new Date(),
                uid: user?.uid,
                city: data.city,
                whatsapp: data.whatsapp,
                description: data.description,
                images: carListImages
            })
            toast.success('Carro cadastrado com sucesso!')
            reset()
            setCarImages([])
        } catch (error) {
            console.log(error.message)
            toast.error("Erro ao cadastrar o carro. Tente novamente.");
        } finally {
            setLoading(false)
        }
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
            <Content style={{ flexDirection: "row" }}>
                <FileContent>
                    <div>
                        <FileInput type="file" accept="images/*" onChange={(e) => handleFile(e)} />
                    </div>
                    <div style={{ position: 'absolute' }}>
                        <FaUpload size={25} />
                    </div>
                </FileContent>
                {carImages && carImages.map(item => <ContainerImage key={item.name}>
                    <Image src={item.previewUrl} />
                    <DeleteBtn onClick={() => handleDelete(item.name)}>
                        <FaRegTrashCan size={28} color="#fff" />
                    </DeleteBtn>
                </ContainerImage>
                )}
            </Content>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Content>
                    <Label>
                        Nome do carro
                    </Label>
                    <Input
                        type="text"
                        placeholder="Ex: Argo..."
                        {...register('name')}
                    />
                    {
                        errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    }
                    <Label>
                        Modelo
                    </Label>
                    <Input
                        type="text"
                        placeholder="Ex: 1.0  Drive..."
                        {...register('model')}
                    />
                    {
                        errors.model && <ErrorMessage>{errors.model?.message}</ErrorMessage>
                    }
                    <Label>
                        Ano
                    </Label>
                    <Input
                        type="text"
                        placeholder="Ex: 2016/2017"
                        {...register('year')}
                    />
                    {
                        errors.year && <ErrorMessage>{errors.year?.message}</ErrorMessage>
                    }
                    <Label>
                        Km rodados
                    </Label>
                    <Input
                        type="text"
                        placeholder="Ex: 22000..."
                        {...register('km')}
                    />
                    {
                        errors.km && <ErrorMessage>{errors.km?.message}</ErrorMessage>
                    }
                    <Label>
                        Valor em R$
                    </Label>
                    <Input
                        type="text"
                        placeholder="Ex: 61300..."
                        {...register('price')}
                    />
                    {
                        errors.price && <ErrorMessage>{errors.price?.message}</ErrorMessage>
                    }
                    <Label>
                        Cidade
                    </Label>
                    <Input
                        type="text"
                        placeholder="Ex: Brasilia - DF..."
                        {...register('city')}
                    />
                    {
                        errors.city && <ErrorMessage>{errors.city?.message}</ErrorMessage>
                    }
                    <Label>
                        WhatsApp
                    </Label>
                    <Input
                        type="text"
                        placeholder="Ex: (00) 0 0000 - 0000 "
                        maxLength={12}
                        {...register('whatsapp')}
                    />
                    {
                        errors.whatsapp && <ErrorMessage>{errors.whatsapp?.message}</ErrorMessage>
                    }
                    <Label>
                        Descrição
                    </Label>
                    <TextArea
                        placeholder="Dados adicionais do veiculo"
                        {...register('description')}
                    />
                    {
                        errors.description && <ErrorMessage> {errors.description?.message}</ErrorMessage>
                    }
                    <SubmitBtn type="submit" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </SubmitBtn>
                </Content>
            </Form>
        </Container>
    )
}