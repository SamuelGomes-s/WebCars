import {
    createContext,
    useEffect,
    useState
} from "react";
import { auth } from "../services/Firebase/firebaseConnection";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import { toast } from "react-toastify";


export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loginCompleted, setLoginCompleted] = useState(false)

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            if (user) {
                let u = {
                    uid: user.uid,
                    email: user?.email,
                    name: user?.displayName
                }
                setLoginCompleted(true)
                setUser(u)
                setLoadingAuth(false)
            } else {
                setUser(null)
                setLoginCompleted(false)
                setLoadingAuth(false)
            }
        })
        return () => {
            unSub()
        }
    }, [])

    function handleTest() {
        toast.success('Teste de notificação e contexto bem-sucedido!');
    }

    async function handleSignIn(email, password) {
        setLoginCompleted(false)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            let u = {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                name: userCredential.user.displayName
            }
            toast.success('Logado com sucesso.')
            setUser(u)
            setLoginCompleted(true)
        } catch (error) {
            toast.error(error.message)
        }
    }

    async function handleSignUp(name, email, password) {
        setLoginCompleted(false)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            try {
                await updateProfile(userCredential.user, {
                    displayName: name
                })
                toast.success('Conta criada com sucesso.')
                let u = {
                    uid: userCredential.user.uid,
                    email: email,
                    name: name
                } 
                setUser(u)
                setLoginCompleted(true)
            } catch (error) {
                toast.error(error.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    async function logOut() {
        try {
            await signOut(auth)
            console.log('Deslogado.')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                handleTest,
                handleSignIn,
                handleSignUp,
                logOut,
                loginCompleted,
                setLoginCompleted,
                loadingAuth,
                setLoadingAuth
            }}>
            {children}
        </AuthContext.Provider>
    )
}