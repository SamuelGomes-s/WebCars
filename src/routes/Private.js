import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {

    const { signed, loadinAuth } = useContext(AuthContext)

    if (loadinAuth) {
        return <div></div>
    }
    if (!signed) {
        return <Navigate to={'/'} />
    }

    return children
}