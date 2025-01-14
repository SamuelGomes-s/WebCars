import { useContext } from 'react'
import { DashboardHeader, ItensHeader, LogOutBtn } from '../../styles/dashboardStyles'
import { Container } from '../../styles/generalStyles'
import { AuthContext } from '../../contexts/authContext'


export default function Dashboard() {

    const {logOut } = useContext(AuthContext)

    async function handleLogout() {
        await logOut()
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

        </Container>
    )
}