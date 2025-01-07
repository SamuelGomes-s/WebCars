import {
    ActionBtn,
    HeaderContainer,
    HeaderContent,
    Logo
} from "../../styles/headerStyles";
import { IoMdLogIn } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Header() {

    const loadingAuth = false;
    const signed = false

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