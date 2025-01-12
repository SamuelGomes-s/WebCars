import {
    ActionBtn,
    HeaderContainer,
    HeaderContent,
} from "../../styles/headerStyles";
import { IoMdLogIn } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Logo } from "../../styles/generalStyles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext"

export default function Header() {
    const {
        loadingAuth,
        signed
    } = useContext(AuthContext)

    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo />
                {signed && !loadingAuth && (
                    <ActionBtn to={'/dashboard'} >
                        <IoMdLogIn color="#000" size={45} />
                    </ActionBtn>
                )
                }
                {
                    !signed && !loadingAuth && (
                        <ActionBtn to={'/login'} >
                            <IoPersonCircleOutline color={"#000"} size={45} />
                        </ActionBtn>
                    )
                }
            </HeaderContent>
        </HeaderContainer>
    )
}