import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LayoutPortal } from "../../components/LayoutPortal";
import { PortalTitle } from "../../components/PortalTitle";
import { selectUser } from "../../store/User/User.selectors";

export function DashboardView() {
  const user = useSelector(selectUser)  
  return (
    <LayoutPortal>
        <PortalTitle>Bem vindo(a) {user.name}</PortalTitle>
        {user.type === 1 ? (
          <p>Utilize o menu para gerenciar os dados do site.</p> 
        ) : (
          <Alert variant="info">
            Você receberá as instruções do curso por e-mail
        </Alert>
        )}            
    </LayoutPortal>
  )
}