import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Logo } from "../../styles/generalStyles";
import {
    ChangeTypeBtn,
    Form,
    ContainerLogin,
    ContentForm,
    ContentLogin,
    ErrorMessage,
    Input,
    SubmitBtn
} from "../../styles/loginStyles";
import {
    useContext,
    useEffect,
    useState
} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
export default function Login() {

    const navigate = useNavigate()
    const {
        handleSignIn,
        handleSignUp,
        loginCompleted,
        loadingAuth
    } = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(false)

    const schema = z.object({
        name: !isLogin ? z.string().nonempty('Insira um nome valido.').min(3, "A nome deve possuir no minimo 3 caracteres") : z.string().optional(),
        email: z.string().email('Insira um email válido').nonempty("O campo email é obrigatório"),
        password: z.string().nonempty("O campo senha é obrigatório").min(6, "A senha deve possuir no minimo 6 caracteres")
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        shouldUnregister: true, // Remove campos ocultos da validação
        resolver: zodResolver(schema),
        mode: 'onChange'
    })


    // sempre que cadastrar ou realizar o login, ira atualizar o estado e o redirecionamento.
    useEffect(() => {
        if (loginCompleted) {
            navigate('/dashboard',{ replace: true});
        }
    }, [loginCompleted, navigate]);

    function toggleLoginType() {
        setIsLogin(!isLogin)
        reset()
    }

    async function handleUserSubmission(data) {
        setLoading(true)
        if (isLogin) {
            await handleSignIn(data.email, data.password)
            setLoading(false)
            return
        } else {
            await handleSignUp(data.name, data.email, data.password)
            setLoading(false)
            return
        }
    }

    return (
        <ContainerLogin>
            <ContentLogin>
                <Logo to={'/'} />
                <ContentForm>
                    <Form onSubmit={handleSubmit(handleUserSubmission)}>
                        {!isLogin &&
                            <>
                                <Input
                                    type="text"
                                    placeholder="Digite seu nome"
                                    {
                                    ...register('name')
                                    }
                                />
                            </>
                        }
                        {
                            errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>
                        }
                        <Input
                            type='email'
                            placeholder="Digite seu email"
                            {
                            ...register('email')
                            }
                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                        <Input
                            type='password'
                            placeholder="Digite sua senha"
                            {
                            ...register('password')
                            }
                        />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                        {
                            !isLogin && !loadingAuth &&
                            <SubmitBtn type="submit" disabled={loading}>
                                {loading ? 'Carregando...' : 'Cadastrar'}
                            </SubmitBtn>}
                        {
                            isLogin && !loadingAuth &&
                            <SubmitBtn type="submit" disabled={loading}>
                                {loading ? 'Carregando...' : 'Entrar'}
                            </SubmitBtn>
                        }
                    </Form>
                </ContentForm>
                <ChangeTypeBtn
                    onClick={toggleLoginType}
                >
                    {isLogin ? "Não possui uma conta? Crie uma conta!" : "Já possui uma conta? Realize o login!"}
                </ChangeTypeBtn>
            </ContentLogin>
        </ContainerLogin>
    )
}